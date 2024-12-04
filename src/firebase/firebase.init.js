// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgkNaAaZIe3Bm6tbqF7W45X49tZLsRs68",
  authDomain: "assignment-10-89709.firebaseapp.com",
  projectId: "assignment-10-89709",
  storageBucket: "assignment-10-89709.firebasestorage.app",
  messagingSenderId: "859267134034",
  appId: "1:859267134034:web:a6234e62f60479849d658b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);