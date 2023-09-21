import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1GKEmpq_yqnKNKt0CKgi-m5v6GQ2gA6M",
  authDomain: "drag-and-drop-image-gall-b642a.firebaseapp.com",
  projectId: "drag-and-drop-image-gall-b642a",
  storageBucket: "drag-and-drop-image-gall-b642a.appspot.com",
  messagingSenderId: "190797583645",
  appId: "1:190797583645:web:3d5e23478626b4443b7df4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);