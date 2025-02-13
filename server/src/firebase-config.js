// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";

const { collection, query, where, getDocs, Timestamp, getFirestore, setDoc, doc } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB55isYz4zFSWy4MP8ntSqjmr0bgo9v6-Y",
    authDomain: "pemilu-fh.firebaseapp.com",
    projectId: "pemilu-fh",
    storageBucket: "pemilu-fh.firebasestorage.app",
    messagingSenderId: "832442249722",
    appId: "1:832442249722:web:64f981af53ae30ce0c3443",
    measurementId: "G-1J61S9YEH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);


module.exports = { db, collection, query, where, getDocs, Timestamp, setDoc, doc};