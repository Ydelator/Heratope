import app from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD3KCcaG25iWuxU5csi3KDiZgjvrHv2Fcg",
  authDomain: "heratope-3a117.firebaseapp.com",
  projectId: "heratope-3a117",
  storageBucket: "heratope-3a117.appspot.com",
  messagingSenderId: "18829986093",
  appId: "1:18829986093:web:2a24031c8ed1855d9eeba4"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}