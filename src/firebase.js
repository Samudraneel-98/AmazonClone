import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWyZrTeWtsKdzL9qOkihkOfeNMFtRDyFU",
  authDomain: "clonebyneel.firebaseapp.com",
  projectId: "clonebyneel",
  storageBucket: "clonebyneel.appspot.com",
  messagingSenderId: "4492504747",
  appId: "1:4492504747:web:be80bd5888955f40efd1ee",
  measurementId: "G-486QH1DN4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };