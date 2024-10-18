// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"
import {  getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bB87xBGEpLLB8BKd7-nnIjl4esSqjHY",
  authDomain: "login-66157.firebaseapp.com",
  projectId: "login-66157",
  storageBucket: "login-66157.appspot.com",
  messagingSenderId: "781300476928",
  appId: "1:781300476928:web:ea3b9ff56454cee60cfce5",
  measurementId: "G-QMWE7R1SE8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(); 

//GuardarPost
export const savePost = (title, description, userMail) => {
  addDoc(collection(db, "Posts"), {title, description, userMail})
}

//obtenerPost
export const getPost = () => getDocs(collection(db, "posts"))






  
