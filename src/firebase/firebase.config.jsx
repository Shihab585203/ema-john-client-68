// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi34dgVBEFLp0JvAshhkr2DOhRw6-Djs8",
  authDomain: "practices-client.firebaseapp.com",
  projectId: "practices-client",
  storageBucket: "practices-client.appspot.com",
  messagingSenderId: "224468084077",
  appId: "1:224468084077:web:4953b3f6843cbb196a6664",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;