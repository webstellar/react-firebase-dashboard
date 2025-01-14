import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
});

console.log(firebase.app().options);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
