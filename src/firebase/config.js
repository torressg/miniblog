import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBYeJIcdE-OTuq0aCHIAOnSLNL09xNgMco",
  authDomain: "miniblog-d1773.firebaseapp.com",
  projectId: "miniblog-d1773",
  storageBucket: "miniblog-d1773.appspot.com",
  messagingSenderId: "912073027603",
  appId: "1:912073027603:web:ed5d55d1f16b0eb9e00fe6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { app, db }