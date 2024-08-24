// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqA6_iaxJZt0fpQED6ilU7Knfp_3sc8mU",
  authDomain: "fitnes-pro-ba82f.firebaseapp.com",
  databaseURL: "https://fitnes-pro-ba82f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnes-pro-ba82f",
  storageBucket: "fitnes-pro-ba82f.appspot.com",
  messagingSenderId: "1037114145172",
  appId: "1:1037114145172:web:8f9e1bcec7b74d66483781",
  measurementId: "G-GRZJDNPZFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app)
const doc = getDoc

export {database}
export {doc}
