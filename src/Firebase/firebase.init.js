// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxfTRji_Hj3rV3loPmEml99TebqLgwJgU",
    authDomain: "news-website-2026.firebaseapp.com",
    projectId: "news-website-2026",
    storageBucket: "news-website-2026.firebasestorage.app",
    messagingSenderId: "574735814788",
    appId: "1:574735814788:web:9d05822033858564ccb2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);