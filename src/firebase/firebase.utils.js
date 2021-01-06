import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyABAZ_5bTQiOZS_wxvRp-7Zg6LTsGvmzco",
  authDomain: "crwn-db-82593.firebaseapp.com",
  projectId: "crwn-db-82593",
  storageBucket: "crwn-db-82593.appspot.com",
  messagingSenderId: "273723117644",
  appId: "1:273723117644:web:bae3be52f2a70e5fe664e9",
  measurementId: "G-SWGVXKNZ75"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;