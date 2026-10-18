// Google sign-in + Firestore sync. Each account's progress lives in one document: users/{uid}.
import config from './firebase-config.js';
import * as store from './store.js';

const V = '12.19.0';
const CDN = `https://www.gstatic.com/firebasejs/${V}`;

let fb = null;          // loaded SDK pieces
let user = null;
let unsubDoc = null;
let pushTimer = null;
let lastPushed = '';
let status = 'off';     // off | signed-out | syncing | synced | error
let lastError = '';
let lastSynced = null;
const subs = new Set();

export const configured = () => !!config;
export const currentUser = () => user;
export const syncStatus = () => ({ status, lastError, lastSynced });
/** Subscribe to auth/sync status changes. `remoteChanged` is true when cloud data was applied locally. */
export const onSyncChange = (fn) => { subs.add(fn); return () => subs.delete(fn); };
const emit = (remoteChanged = false) => subs.forEach((fn) => fn({ user, status, remoteChanged }));
const setStatus = (s, err = '') => { status = s; lastError = err; if (s === 'synced') lastSynced = new Date(); emit(); };

async function load() {
  if (fb) return fb;
  const [app, auth, fs] = await Promise.all([
    import(`${CDN}/firebase-app.js`), import(`${CDN}/firebase-auth.js`), import(`${CDN}/firebase-firestore.js`),
  ]);
  const a = app.initializeApp(config);
  fb = { auth: auth.getAuth(a), db: fs.getFirestore(a), authMod: auth, fs };
  return fb;
}

const docRef = () => fb.fs.doc(fb.db, 'users', user.uid);
const payload = () => JSON.stringify(store.syncable());

async function push() {
  clearTimeout(pushTimer);
  if (!user) return;
  const data = payload();
  if (data === lastPushed) return;
  setStatus('syncing');
  try {
    await fb.fs.setDoc(docRef(), { data, email: user.email || '', updatedAt: fb.fs.serverTimestamp() });
    lastPushed = data;
    setStatus('synced');
  } catch (e) {
    console.warn('Sync push failed', e);
    setStatus('error', e.code === 'permission-denied' ? 'Permission denied — check your Firestore rules.' : (e.message || 'Could not save to the cloud.'));
  }
}
const schedulePush = () => { if (user) { clearTimeout(pushTimer); pushTimer = setTimeout(push, 1500); } };

/** First contact after sign-in: decide whether to merge, adopt, or upload. */
async function reconcile() {
  setStatus('syncing');
  const snap = await fb.fs.getDoc(docRef());
  const remote = snap.exists() ? JSON.parse(snap.data().data) : null;
  const local = store.get();
  const owner = local.ownerUid;

  if (owner && owner !== user.uid) {
    // Another account's progress is on this device: never mix them.
    store.applyRemote(remote || {}, user.uid);
  } else if (!owner && store.hasProgress() && remote && store.hasProgress(remote)) {
    const ok = confirm(`This device has progress that isn't linked to an account yet.\n\nAdd it to ${user.email}? (Choose Cancel to load only the account's saved progress.)`);
    store.applyRemote(ok ? store.merge(store.syncable(), remote) : remote, user.uid);
  } else if (remote) {
    store.applyRemote(owner ? store.merge(store.syncable(), remote) : (store.hasProgress() ? store.merge(store.syncable(), remote) : remote), user.uid);
  } else {
    store.setOwner(user.uid); // brand-new account: upload this device's progress
  }
  lastPushed = remote ? JSON.stringify(remote) : '';
  emit(true);
  await push();

  // Live updates from the user's other devices.
  unsubDoc?.();
  unsubDoc = fb.fs.onSnapshot(docRef(), (s) => {
    if (s.metadata.hasPendingWrites || !s.exists()) return;
    const raw = s.data().data;
    if (raw === lastPushed) return;
    const merged = store.merge(store.syncable(), JSON.parse(raw));
    store.applyRemote(merged, user.uid);
    lastPushed = raw;
    setStatus('synced');
    emit(true);
    if (JSON.stringify(store.syncable()) !== raw) schedulePush();
  }, (e) => setStatus('error', e.message));
}

export async function initSync() {
  if (!config) { setStatus('off'); return; }
  try {
    await load();
  } catch (e) {
    setStatus('error', 'Could not load Firebase (offline?).');
    return;
  }
  store.onChange(schedulePush);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') push(); });
  fb.authMod.onAuthStateChanged(fb.auth, async (u) => {
    user = u;
    unsubDoc?.(); unsubDoc = null;
    if (!u) { setStatus('signed-out'); return; }
    try { await reconcile(); } catch (e) { console.warn(e); setStatus('error', e.message || 'Sync failed.'); }
  });
}

export async function signIn() {
  await load();
  const provider = new fb.authMod.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await fb.authMod.signInWithPopup(fb.auth, provider);
  } catch (e) {
    if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
      await fb.authMod.signInWithRedirect(fb.auth, provider);
    } else if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
      throw e;
    }
  }
}

/** Sign out and clear this device, so the next person who uses it starts fresh. Progress stays in the cloud. */
export async function signOut() {
  await push();
  unsubDoc?.(); unsubDoc = null;
  const keepKey = store.get().settings.apiKey;
  await fb.authMod.signOut(fb.auth);
  store.resetAll();
  store.get().settings.apiKey = keepKey;
  store.get().onboarded = true;
  store.save({ remote: true });
  lastPushed = '';
  emit(true);
}
