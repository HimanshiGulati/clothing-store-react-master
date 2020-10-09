import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwAY9r5t_XEY8wrEbxFh0hKoMCwimnKKo",
    authDomain: "clothing-db-3e6b5.firebaseapp.com",
    databaseURL: "https://clothing-db-3e6b5.firebaseio.com",
    projectId: "clothing-db-3e6b5",
    storageBucket: "clothing-db-3e6b5.appspot.com",
    messagingSenderId: "181364756485",
    appId: "1:181364756485:web:f583dbc861e4acd54bcc6c",
    measurementId: "G-LYP6ZPSK2M"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;