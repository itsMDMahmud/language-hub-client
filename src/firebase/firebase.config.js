// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId

  // apiKey: "AIzaSyCS3FoWe8V7s88Ft44grtUDwf6xYmkFhFU",
  // authDomain: "language-hubb.firebaseapp.com",
  // projectId: "language-hubb",
  // storageBucket: "language-hubb.appspot.com",
  // messagingSenderId: "947235869706",
  // appId: "1:947235869706:web:a1c0c1631602a62f4ebbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;