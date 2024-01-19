// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqKj2e1uyxiHKrrtjl58jSPgJKwF_xe2U",
  authDomain: "rpg-manager-4e0b4.firebaseapp.com",
  projectId: "rpg-manager-4e0b4",
  storageBucket: "rpg-manager-4e0b4.appspot.com",
  messagingSenderId: "66809770316",
  appId: "1:66809770316:web:3a9ab2f0ba43b78ec51fe9",
  measurementId: "G-QKG0LLBQTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getDatabase(app);

const dbRef = ref(db);

export default auth;

export { dbRef, db };
