// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGmF6z5nHU9S3ISqAYI-avPTNk30w9C8",
  authDomain: "ema-john-simple1-c27c1.firebaseapp.com",
  projectId: "ema-john-simple1-c27c1",
  storageBucket: "ema-john-simple1-c27c1.appspot.com",
  messagingSenderId: "620485669891",
  appId: "1:620485669891:web:6b2fdb168f45c552c00a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;