import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDm5PZuFm1CSZkoXCqCD6y2gB0pStpi-50",
authDomain: "retrophile-a09ef.firebaseapp.com",
projectId: "retrophile-a09ef",
storageBucket: "retrophile-a09ef.appspot.com",
messagingSenderId: "411960648060",
appId: "1:411960648060:web:8c10a7cf72eb7b1ec844f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);