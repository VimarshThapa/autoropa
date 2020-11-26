import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD5hcTN5A2hd5jQZanhoO5KMaRJwdFuGNA",
    authDomain: "autoropa-db.firebaseapp.com",
    databaseURL: "https://autoropa-db.firebaseio.com",
    projectId: "autoropa-db",
    storageBucket: "autoropa-db.appspot.com",
    messagingSenderId: "169413760143",
    appId: "1:169413760143:web:67d4ea57dd6d32070f0cfa",
    measurementId: "G-N6G4C8PL0H"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;