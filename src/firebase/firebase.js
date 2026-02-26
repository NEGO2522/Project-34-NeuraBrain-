// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Iq7qGdAUxFq6pJ7pqLX65EjgGafm4A4",
  authDomain: "neurabrain-ba629.firebaseapp.com",
  projectId: "neurabrain-ba629",
  storageBucket: "neurabrain-ba629.firebasestorage.app",
  messagingSenderId: "977111195588",
  appId: "1:977111195588:web:d9b6ffab824f10562c0e91",
  measurementId: "G-MTF1LHTBKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);