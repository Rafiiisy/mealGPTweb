import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvR6-1WYyTxD2VQSvjtohLJC2ys1ZrEV8",
  authDomain: "mealgptnew.firebaseapp.com",
  projectId: "mealgptnew",
  storageBucket: "mealgptnew.appspot.com",
  messagingSenderId: "957981477954",
  appId: "1:957981477954:web:728069ea1e53b1300971db",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export auth and db
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
