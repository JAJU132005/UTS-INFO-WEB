// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBczN5IJ14kYxWsXMSaXpf2S-q9cKYlVxU",
  authDomain: "utsinfoweb.firebaseapp.com",
  projectId: "utsinfoweb",
  storageBucket: "utsinfoweb.appspot.com",
  messagingSenderId: "45794050714",
  appId: "1:45794050714:web:6bd2e0b432789313f55523"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)
export default {appFirebase,db};