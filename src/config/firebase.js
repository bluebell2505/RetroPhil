
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJcse6ix3yfYAYwXB00uPTqU6xFScI7Eg",
  authDomain: "retrophil-87db7.firebaseapp.com",
  projectId: "retrophil-87db7",
  storageBucket: "retrophil-87db7.appspot.com",
  messagingSenderId: "595351134771",
  appId: "1:595351134771:web:cbcece100726f4ba3bf946",
  measurementId: "G-TZSG2E37MK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);