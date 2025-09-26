// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwNfdsx7LTXISKtsn6MgIBEw3Tc2uR4CY",
  authDomain: "loginsignup-fa884.firebaseapp.com",
  projectId: "loginsignup-fa884",
  storageBucket: "loginsignup-fa884.firebasestorage.app",
  messagingSenderId: "943584025719",
  appId: "1:943584025719:web:a15ab0bf8e8325a7b87a72",
  measurementId: "G-3ERTE82BCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);