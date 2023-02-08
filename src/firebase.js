import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBr7haP6mBFjY1Z02Vj0Cx4LxuErGfivSk",
  authDomain: "facebookclone-e4e75.firebaseapp.com",
  projectId: "facebookclone-e4e75",
  storageBucket: "facebookclone-e4e75.appspot.com",
  messagingSenderId: "336602815221",
  appId: "1:336602815221:web:a5449d573352e1cb7bc3bc",
  measurementId: "G-T01S1Y50XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};