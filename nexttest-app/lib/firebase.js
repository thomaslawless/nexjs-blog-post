import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {

    apiKey: "AIzaSyAxu2OpsXpffIip71LVqfkEtyZg6XzuE50",
    authDomain: "nextjs-50777.firebaseapp.com",
    projectId: "nextjs-50777",
    storageBucket: "nextjs-50777.appspot.com",
    messagingSenderId: "416109518286",
    appId: "1:416109518286:web:71a48426499a6bc07b9f9f"
  };
  function createFirebaseApp(config) {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
  }
  
  // const firebaseApp = initializeApp(firebaseConfig);
  const firebaseApp = createFirebaseApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);
  export const googleAuthProvider = new GoogleAuthProvider();

  export const firestore = getFirestore(firebaseApp);

  export const storage = getStorage(firebaseApp);
  export const STATE_CHANGED = 'state_changed';

//export const auth = firebase.auth();
//export const firestore = firebase.firestore();
//export const storage = firebase.storage();
//export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const fromMillis = firebase.firestore.Timestamp.fromMillis;
//export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
//export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
//export const increment = firebase.firestore.FieldValue.increment;
/*
export async function getUserWithUserName(username){
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc){
  const data = doc.data();
  return{
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.createdAt.toMillis(),

  };
}
*/

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  // const usersRef = collection(firestore, 'users');
  // const query = usersRef.where('username', '==', username).limit(1);

  const q = query(
    collection(firestore, 'users'), 
    where('username', '==', username),
    limit(1)
  )
  const userDoc = ( await getDocs(q) ).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}