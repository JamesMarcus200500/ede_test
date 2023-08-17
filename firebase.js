// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC_ulzq18YzrZpFjOuR7nVQUHgeLVYFEE",
  authDomain: "phauth-604d0.firebaseapp.com",
  projectId: "phauth-604d0",
  storageBucket: "phauth-604d0.appspot.com",
  messagingSenderId: "690017942150",
  appId: "1:690017942150:web:68231b8277d05c8c60ef07",
  measurementId: "G-68GBLVR4SB",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyANs6sz2OJDslHSv085LBFCZB7VJ04qrac",
//   authDomain: "fire-testing-579e2.firebaseapp.com",
//   projectId: "fire-testing-579e2",
//   storageBucket: "fire-testing-579e2.appspot.com",
//   messagingSenderId: "583019384050",
//   appId: "1:583019384050:web:0cde7e7e439f73d5b5d46b",
//   measurementId: "G-2B9SS87KR5",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
