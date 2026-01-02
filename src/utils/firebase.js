// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5zNlTrgbInT1RMlafpkTLOpBqqvZG2Hk",
  authDomain: "netflixgpt-76363.firebaseapp.com",
  projectId: "netflixgpt-76363",
  storageBucket: "netflixgpt-76363.firebasestorage.app",
  messagingSenderId: "913838216134",
  appId: "1:913838216134:web:ebec9b8650a320b34118c7",
  measurementId: "G-ZKXV9S4E02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();