// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB60yyvRGXRI5o3RV-TpWz--9qPWusNDs",
  authDomain: "satyamv7-dfbc9.firebaseapp.com",
  projectId: "satyamv7-dfbc9",
  storageBucket: "satyamv7-dfbc9.appspot.com",
  messagingSenderId: "206916216357",
  appId: "1:206916216357:web:9172be9716cdfb1497c1cc",
  measurementId: "G-5K8KVXK0Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);