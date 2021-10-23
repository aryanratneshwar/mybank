// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMKaJ1T-20mMwAHR7c5w9keVegByAZgyA",
  authDomain: "spark-bank-a9c51.firebaseapp.com",
  projectId: "spark-bank-a9c51",
  storageBucket: "spark-bank-a9c51.appspot.com",
  messagingSenderId: "972149285441",
  appId: "1:972149285441:web:1e00551e93b9e6cfa39cc0",
  measurementId: "G-FHSSV2R53K"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default  fireDb.database().ref();