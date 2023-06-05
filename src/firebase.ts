// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zXX7nB1WnPPdm-nSdeVhdCl_Ttf9oq0",
  authDomain: "mp-beauchemin.firebaseapp.com",
  projectId: "mp-beauchemin",
  storageBucket: "mp-beauchemin.appspot.com",
  messagingSenderId: "1015537869180",
  appId: "1:1015537869180:web:837383ceada92fe470c4f9",
  measurementId: "G-L56Q1ZQEMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app