import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8uBQeqbv3gJh-kdCoeSnkaPR53FqL6FA",
  authDomain: "clone-5e617.firebaseapp.com",
  projectId: "clone-5e617",
  storageBucket: "clone-5e617.appspot.com",
  messagingSenderId: "59927452747",
  appId: "1:59927452747:web:e226ad8b6d0813b01201ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
