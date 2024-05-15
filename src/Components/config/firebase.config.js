// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBAHd4QdvjyzpY1DPGQSUFl6Gz-1eFJlBI",
  authDomain: "mile11project.firebaseapp.com",
  projectId: "mile11project",
  storageBucket: "mile11project.appspot.com",
  messagingSenderId: "50952685488",
  appId: "1:50952685488:web:3d69f8b1bd50f7e11ab875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
