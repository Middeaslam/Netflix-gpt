// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEIGAMswaP-mdXJ71HGb3UlZVLs78bxxg",
  authDomain: "netflixgpt-c783b.firebaseapp.com",
  projectId: "netflixgpt-c783b",
  storageBucket: "netflixgpt-c783b.appspot.com",
  messagingSenderId: "153037813413",
  appId: "1:153037813413:web:8588072daabdf806393f4c",
  measurementId: "G-Q5G00DZ8YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
