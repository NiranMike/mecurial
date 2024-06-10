// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3U75WeG42HXLayAjnLRi-niwHy4QmpZs",
  authDomain: "mecurial-a2e63.firebaseapp.com",
  projectId: "mecurial-a2e63",
  storageBucket: "mecurial-a2e63.appspot.com",
  messagingSenderId: "963361232263",
  appId: "1:963361232263:web:5ee3d2e0e0582c34a7ef22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
