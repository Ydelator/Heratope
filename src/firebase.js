import firebase from "firebase/app";
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3KCcaG25iWuxU5csi3KDiZgjvrHv2Fcg",
  authDomain: "heratope-3a117.firebaseapp.com",
  projectId: "heratope-3a117",
  storageBucket: "heratope-3a117.appspot.com",
  messagingSenderId: "18829986093",
  appId: "1:18829986093:web:2a24031c8ed1855d9eeba4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}