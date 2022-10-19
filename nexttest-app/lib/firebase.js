import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {

    apiKey: "AIzaSyAxu2OpsXpffIip71LVqfkEtyZg6XzuE50",
    authDomain: "nextjs-50777.firebaseapp.com",
    projectId: "nextjs-50777",
    storageBucket: "nextjs-50777.appspot.com",
    messagingSenderId: "416109518286",
    appId: "1:416109518286:web:71a48426499a6bc07b9f9f"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

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