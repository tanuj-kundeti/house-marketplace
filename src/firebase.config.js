// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQVy8Qm05S9mEtMfK9HqeagVbuQCkR8Rg",
  authDomain: "house-marketplace-app-3185a.firebaseapp.com",
  projectId: "house-marketplace-app-3185a",
  storageBucket: "house-marketplace-app-3185a.appspot.com",
  messagingSenderId: "522229504506",
  appId: "1:522229504506:web:d0d862e499ce9cd8e36c43",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
