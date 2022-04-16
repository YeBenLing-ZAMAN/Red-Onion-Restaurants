// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJZzy1UaxWN8GwhBS73vNutgU49vaYXs0",
  authDomain: "red-onion-restaurant-yebenling.firebaseapp.com",
  projectId: "red-onion-restaurant-yebenling",
  storageBucket: "red-onion-restaurant-yebenling.appspot.com",
  messagingSenderId: "257252168162",
  appId: "1:257252168162:web:74985997f2cd2db57929bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;