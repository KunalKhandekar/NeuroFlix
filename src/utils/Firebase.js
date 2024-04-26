// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7nxHom-hxh_ezc-cdPmzVuPg25Yx_oM",
  authDomain: "neuroflix-79ed3.firebaseapp.com",
  projectId: "neuroflix-79ed3",
  storageBucket: "neuroflix-79ed3.appspot.com",
  messagingSenderId: "724725156079",
  appId: "1:724725156079:web:646cf32321bf82a136f31a",
  measurementId: "G-9YELFGG2XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
