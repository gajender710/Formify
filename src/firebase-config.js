import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBs5YQ5Voh2XYfwaMLZwj30Gd8gTnHbjns",
    authDomain: "formify-1b681.firebaseapp.com",
    projectId: "formify-1b681",
    storageBucket: "formify-1b681.appspot.com",
    messagingSenderId: "696818108182",
    appId: "1:696818108182:web:4d93cf2c183f8b8a40f237",
    measurementId: "G-L93Z46ZWE0"
  };
  
  const app  = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);