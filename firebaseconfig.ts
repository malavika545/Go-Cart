// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdwqjrGDuwDIuMGQR1WMz14DMk6KxPpDg",
  authDomain: "gocart-e9731.firebaseapp.com",
  projectId: "gocart-e9731",
  storageBucket: "gocart-e9731.firebasestorage.app",
  messagingSenderId: "1037730606654",
  appId: "1:1037730606654:web:5075ac5c6f20dcfd916b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);