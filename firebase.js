// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuration Firebase réelle
const firebaseConfig = {
  apiKey: "AIzaSyAB57QvsJb1EtBLZEq5k3Q7CYeLP61d8x8",
  authDomain: "ihl-reparation-58e25.firebaseapp.com",
  projectId: "ihl-reparation-58e25",
  storageBucket: "ihl-reparation-58e25.appspot.com",
  messagingSenderId: "1025865567525",
  appId: "1:1025865567525:web:d1ce02766a8dad37c89ecc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export via window pour auth.js
window.firebase = {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};