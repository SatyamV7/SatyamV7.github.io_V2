// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjQ4NCXzRkzZ3gpyhpsWqNWAsIR4-XAJ4",
  authDomain: "satyamv7-github-io.firebaseapp.com",
  projectId: "satyamv7-github-io",
  storageBucket: "satyamv7-github-io.appspot.com",
  messagingSenderId: "586875101092",
  appId: "1:586875101092:web:826bb1836915ac2dfa6b31",
  measurementId: "G-D89JG3957R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);