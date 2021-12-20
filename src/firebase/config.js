// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpCAtsEDdQjWkkmQTKMRIZWWqDcAXzS8U",
  authDomain: "pruebafirebase-74c09.firebaseapp.com",
  projectId: "pruebafirebase-74c09",
  storageBucket: "pruebafirebase-74c09.appspot.com",
  messagingSenderId: "1071622634804",
  appId: "1:1071622634804:web:0b37bac43723c224c93961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)