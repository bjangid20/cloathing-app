import { initializeApp } from "firebase/app";

import {
  signInWithRedirect,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxxEydkKdXaKoX3xuvsJV7pLjOsOQmN3o",
  authDomain: "crwn-clothing-db-435c5.firebaseapp.com",
  projectId: "crwn-clothing-db-435c5",
  storageBucket: "crwn-clothing-db-435c5.appspot.com",
  messagingSenderId: "430838925501",
  appId: "1:430838925501:web:f2fbf0df33e1d66c0a4fd4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log(e.message);
    }
  }
  return userDocRef;
};
