import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCIS3zinKS0mEzR-T6Fa1TlzL9xajFztRM",
  // authDomain: "react-admin-firebase-auth-crud.firebaseapp.com",
  // projectId: "react-admin-firebase-auth-crud",
  // storageBucket: "react-admin-firebase-auth-crud.appspot.com",
  // messagingSenderId: "444984135208",
  // appId: "1:444984135208:web:2a48b90cf7dd7dbc85ef1d"
  apiKey: "AIzaSyB5Uhj03VpjfxW3L57-BB3e9v4K6MJ9lNM",
  authDomain: "food-frenzy-f66c7.firebaseapp.com",
  projectId: "food-frenzy-f66c7",
  storageBucket: "food-frenzy-f66c7.appspot.com",
  messagingSenderId: "675491185565",
  appId: "1:675491185565:web:93de37293f436c390ba574",
  measurementId: "G-4WCKQMGPEE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);