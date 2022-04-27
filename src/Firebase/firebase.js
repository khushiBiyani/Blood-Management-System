import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyc_rcpGqMqo3m4sovUmesAdwfncX9n-A",
  authDomain: "blood-management-3f905.firebaseapp.com",
  projectId: "blood-management-3f905",
  storageBucket: "blood-management-3f905.appspot.com",
  messagingSenderId: "867050692232",
  appId: "1:867050692232:web:f0446127ed23ab7da3c93d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
