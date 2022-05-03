import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "meditation-b02d2.firebaseapp.com",
  projectId: "meditation-b02d2",
  storageBucket: "meditation-b02d2.appspot.com",
  messagingSenderId: "69484463235",
  appId: "1:69484463235:web:12f03ae9d88e84728587b6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
