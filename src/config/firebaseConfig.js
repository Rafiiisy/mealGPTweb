// src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvR6-1WYyTxD2VQSvjtohLJC2ys1ZrEV8",
  authDomain: "mealgptnew.firebaseapp.com",
  projectId: "mealgptnew",
  storageBucket: "mealgptnew.appspot.com",
  messagingSenderId: "957981477954",
  appId: "1:957981477954:web:728069ea1e53b1300971db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

