import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_PUBLIC_APY_KEY,
  authDomain: process.env.REACT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.REACT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.REACT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

export { db, storage, auth, firebaseConfig };







