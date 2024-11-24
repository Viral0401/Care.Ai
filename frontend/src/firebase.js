import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO2P5DJBhFOqmD3ba5QzyIuclGf24ypK8",
  authDomain: "synergy-35091.firebaseapp.com",
  projectId: "synergy-35091",
  storageBucket: "synergy-35091.appspot.com",
  messagingSenderId: "120925986035",
  appId: "1:120925986035:web:04ced91bbeebdd0f9ceb86",
  measurementId: "G-HY022KRC96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Example of creating a document reference
export const docRef = doc(db, "Synergy", "JGkW3XM2n3k8EC0xBZMw"); // Replace with your actual document path

export const auth = getAuth(app);
export default app;
