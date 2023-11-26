import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD42QGlPqp7pODa8p_9NokMLTtAn3D-vxI",
    authDomain: "tutorial-de-firebase-b4b5a.firebaseapp.com",
    projectId: "tutorial-de-firebase-b4b5a",
    storageBucket: "tutorial-de-firebase-b4b5a.appspot.com",
    messagingSenderId: "1025485724525",
    appId: "1:1025485724525:web:52a4cbc3a04a75002f1864",
    measurementId: "G-V0DDTEW47Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
