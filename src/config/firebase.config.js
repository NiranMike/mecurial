// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtekQH_92vSNsobbhlqWGI_SKLvgKSaxY",
  authDomain: "mercurialapp-a6007.firebaseapp.com",
  projectId: "mercurialapp-a6007",
  storageBucket: "mercurialapp-a6007.appspot.com",
  messagingSenderId: "75718864774",
  appId: "1:75718864774:web:823104e6a04dee8516c607",
  measurementId: "G-1XPGY543ML",
};


// const firebaseConfig = {
//   apiKey: "AIzaSyB3U75WeG42HXLayAjnLRi-niwHy4QmpZs",
//   authDomain: "mecurial-a2e63.firebaseapp.com",
//   projectId: "mecurial-a2e63",
//   storageBucket: "mecurial-a2e63.appspot.com",
//   messagingSenderId: "963361232263",
//   appId: "1:963361232263:web:5ee3d2e0e0582c34a7ef22"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize GoogleAnalytics 
// const analytics = getAnalytics(app);




export { db };
