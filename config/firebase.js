import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Constants from "expo-constants";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClxL6v6_euJoACOovPqlJihAgdcKfNV8c",
  authDomain: "planeat-13932.firebaseapp.com",
  projectId: "planeat-13932",
  storageBucket: "planeat-13932.appspot.com",
  messagingSenderId: "37249773607",
  appId: "1:37249773607:web:da79709c6f2d1575d29e02",
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
