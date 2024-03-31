import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsYxXdL21pt-0EG41Qwj0qFG3jYeZ_kxA",
  authDomain: "lab4-advtopicmobdev.firebaseapp.com",
  projectId: "lab4-advtopicmobdev",
  storageBucket: "lab4-advtopicmobdev.appspot.com",
  messagingSenderId: "696565929147",
  appId: "1:696565929147:web:6af2115c6669140a9d059e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
