// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLemkZZSj_ol7mRd41FpdS4pVzPA0G_l4",
  authDomain: "anitofu-5db97.firebaseapp.com",
  projectId: "anitofu-5db97",
  storageBucket: "anitofu-5db97.appspot.com",
  messagingSenderId: "838353989144",
  appId: "1:838353989144:web:9d73cec590e88bceb55d6d",
  measurementId: "G-QZN4M7V0WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
