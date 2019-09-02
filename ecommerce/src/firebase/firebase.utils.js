import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCc1rTpjPkCjXN8NidqcMpNnQkG5kQhync",
  authDomain: "crown-db-16670.firebaseapp.com",
  databaseURL: "https://crown-db-16670.firebaseio.com",
  projectId: "crown-db-16670",
  storageBucket: "",
  messagingSenderId: "579302720603",
  appId: "1:579302720603:web:d93c6a2c04cc0ed5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
