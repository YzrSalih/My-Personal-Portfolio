import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Analytics şu an zorunlu değil ama ileride kullanmak istersen import edebilirsin
// import { getAnalytics } from "firebase/analytics"; 

// Senin Firebase Proje Ayarların
const firebaseConfig = {
    apiKey: "AIzaSyBvGzqlsmcQZYMC-FxEoTkZ74sYwF0xs7c",
    authDomain: "codezy-30f4c.firebaseapp.com",
    projectId: "codezy-30f4c",
    storageBucket: "codezy-30f4c.firebasestorage.app",
    messagingSenderId: "671579133548",
    appId: "1:671579133548:web:15c2b2d57437df2f30ea49",
    measurementId: "G-R638RW9FLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
