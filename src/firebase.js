import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCW2-MjdpvK2MaNSjC8wYCUGzk7Gtz_S8I",
  authDomain: "videoverse-chat-app.firebaseapp.com",
  projectId: "videoverse-chat-app",
  storageBucket: "videoverse-chat-app.appspot.com",
  messagingSenderId: "797468289748",
  appId: "1:797468289748:web:0bff0cd9a169f5acfee941"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);