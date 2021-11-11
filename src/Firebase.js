// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// import * as auth from "firebase/auth";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBVcD4YVb6H-URNU_U26orf25SIHiHBmkA",
  authDomain: "quiz-62148.firebaseapp.com",
  projectId: "quiz-62148",
  storageBucket: "quiz-62148.appspot.com",
  messagingSenderId: "1097034103282",
  appId: "1:1097034103282:web:4f4ee11a63e2046f83936b",
  measurementId: "G-WF4921KMQR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.analytics();
// const auth = firebase.auth();
//firebase.firestore();

export default firebase;
