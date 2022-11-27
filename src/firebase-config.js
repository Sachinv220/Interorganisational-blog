// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5DeJivFDZheBMxggvfrh24MMHtUW3Nqg",
  authDomain: "react-getting-started-ee2e0.firebaseapp.com",
  databaseURL:
    "https://react-getting-started-ee2e0-default-rtdb.firebaseio.com",
  projectId: "react-getting-started-ee2e0",
  storageBucket: "react-getting-started-ee2e0.appspot.com",
  messagingSenderId: "425236782498",
  appId: "1:425236782498:web:d574b0e259bb7b9e4be6fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
