// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWcKIN0gLyr4Fsdk4ZAJ9-Kmm7x6iVgWs",
  authDomain: "street-food-fe929.firebaseapp.com",
  projectId: "street-food-fe929",
  storageBucket: "street-food-fe929.appspot.com",
  messagingSenderId: "572673652994",
  appId: "1:572673652994:web:582cceddc113fb628e6a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;