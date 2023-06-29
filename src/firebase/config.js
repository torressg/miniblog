import { initializeApp } from "firebase/app";
import { gerFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD1LFlyLhJPVlJ1P3ASX7f_wcvcj1CDhaM",
  authDomain: "miniblog-b593d.firebaseapp.com",
  projectId: "miniblog-b593d",
  storageBucket: "miniblog-b593d.appspot.com",
  messagingSenderId: "1075835626942",
  appId: "1:1075835626942:web:b764731b43e48ba8e685ef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }