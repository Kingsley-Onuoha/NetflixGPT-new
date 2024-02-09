// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBctGGbcw0kx7M9aJEvjlm2dZjAD87d_hQ",
  authDomain: "netflixgpt-new-3707f.firebaseapp.com",
  projectId: "netflixgpt-new-3707f",
  storageBucket: "netflixgpt-new-3707f.appspot.com",
  messagingSenderId: "635120535195",
  appId: "1:635120535195:web:11f49006d0b445c003e83e",
  measurementId: "G-7PHMQDW1KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);