import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUOWE6BT9-l_LN2GuF1KvcTLzDDyt77As",
  authDomain: "chatapp-e944a.firebaseapp.com",
  projectId: "chatapp-e944a",
  storageBucket: "chatapp-e944a.appspot.com",
  messagingSenderId: "418640684448",
  appId: "1:418640684448:web:a5597e1537713c3385f0c5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
