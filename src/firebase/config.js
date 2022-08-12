import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDY0-rywzVpzVPky5L_51barIJfv8caszA",
  authDomain: "imagegallery-1b1c5.firebaseapp.com",
  projectId: "imagegallery-1b1c5",
  storageBucket: "imagegallery-1b1c5.appspot.com",
  messagingSenderId: "850366463399",
  appId: "1:850366463399:web:7b4a1aafc4fe08427a8a82",
  measurementId: "G-NN1BH7K76Z",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore()

