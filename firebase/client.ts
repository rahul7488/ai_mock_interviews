import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXAzlLrxVnmMCYRu7LLZgbZJiBy-jAmeg",
  authDomain: "prepwise-acde1.firebaseapp.com",
  projectId: "prepwise-acde1",
  storageBucket: "prepwise-acde1.firebasestorage.app",
  messagingSenderId: "34263478370",
  appId: "1:34263478370:web:66394e3c2656beda81613b",
  measurementId: "G-9S4QF4QKEW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);