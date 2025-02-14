// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {browserLocalPersistence, getAuth, setPersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(process.env.REACT_APP_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Set Firebase authentication persistence to localStorage for long session
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Persistence is now set, and authentication state will be preserved across page reloads
  //console.log("Firebase auth persistence is set to localStorage.");
  })
  .catch((error) => {
    //console.error("Error setting persistence:", error.message);
  });
export default app;