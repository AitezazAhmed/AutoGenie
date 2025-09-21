import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFLQCmPk7olivrF_r2BysFM6nI5r20TwI",
  authDomain: "autogenie-login.firebaseapp.com",
  projectId: "autogenie-login",
  storageBucket: "autogenie-login.firebasestorage.app",
  messagingSenderId: "677484947864",
  appId: "1:677484947864:web:384f3508fc0eb3506323ed",
  measurementId: "G-VJPR5NWM22"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
