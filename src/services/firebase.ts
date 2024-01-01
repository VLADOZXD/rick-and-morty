import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA4FXqOrL-VuAd4ykMKzd00tyXR1MqqDk",
  authDomain: "rick-and-morty-ef2d5.firebaseapp.com",
  projectId: "rick-and-morty-ef2d5",
  storageBucket: "rick-and-morty-ef2d5.appspot.com",
  messagingSenderId: "872117371406",
  appId: "1:872117371406:web:998cc16bf3c26d79a7b25f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider };
