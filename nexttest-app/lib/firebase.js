import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyAxu2OpsXpffIip71LVqfkEtyZg6XzuE50",
    authDomain: "nextjs-50777.firebaseapp.com",
    projectId: "nextjs-50777",
    storageBucket: "nextjs-50777.appspot.com",
    messagingSenderId: "416109518286",
    appId: "1:416109518286:web:71a48426499a6bc07b9f9f"
  };

  if (!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();