// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMOG9qPZpBgxQ4fo01WKo1Nfc8WactxG8",
  authDomain: "netflix-bf09e.firebaseapp.com",
  projectId: "netflix-bf09e",
  storageBucket: "netflix-bf09e.appspot.com",
  messagingSenderId: "784641990346",
  appId: "1:784641990346:web:c8902f0c7c0c278d1bde33",
  measurementId: "G-R5M91482VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore()
