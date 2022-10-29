// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwpszKXB_hKCeN2Yg4MY2h9UnwBngdMrk",
    authDomain: "websalescatcher.firebaseapp.com",
    projectId: "websalescatcher",
    storageBucket: "websalescatcher.appspot.com",
    messagingSenderId: "887417252483",
    appId: "1:887417252483:web:1500eef215ffeeee14c9b6",
    measurementId: "G-27GD85CYEZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)