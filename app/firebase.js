 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import {getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA7V4E1e5xcUJPJY0gOWDRHsVVKbAtvkdM",
   authDomain: "login-ed496.firebaseapp.com",
   projectId: "login-ed496",
   storageBucket: "login-ed496.appspot.com",
   messagingSenderId: "660187521236",
   appId: "1:660187521236:web:8d637213cb59f475cb1b41",
   measurementId: "G-FMRGDQ5RBR"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)