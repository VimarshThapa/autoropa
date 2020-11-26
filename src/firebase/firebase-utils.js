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
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
      
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch(err){
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;