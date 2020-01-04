import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsFZmad8VoXmo4Ph78mCy1mqlZOSQwicE",
    authDomain: "crwn-db-4f7ac.firebaseapp.com",
    databaseURL: "https://crwn-db-4f7ac.firebaseio.com",
    projectId: "crwn-db-4f7ac",
    storageBucket: "crwn-db-4f7ac.appspot.com",
    messagingSenderId: "566042834508",
    appId: "1:566042834508:web:3dfe4e0673eac5b5fca6e9"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
      });
    } catch (error) {
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
