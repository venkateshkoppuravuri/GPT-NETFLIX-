// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq1v1tGae39LPV7iNloMF4zKV3LrfdMNc",
  authDomain: "netflixgpt-aa204.firebaseapp.com",
  projectId: "netflixgpt-aa204",
  storageBucket: "netflixgpt-aa204.appspot.com",
  messagingSenderId: "1002208970371",
  appId: "1:1002208970371:web:b593488f3027df3d133db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
