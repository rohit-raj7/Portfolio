import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  get,
  child,
  increment,
  update
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAozd4rZK6V-F2XpItCIUGkxJ8djlf0cCo",
  authDomain: "portfolio-30f88.firebaseapp.com",
  projectId: "portfolio-30f88",
  storageBucket: "portfolio-30f88.appspot.com",
  messagingSenderId: "854272581929",
  appId: "1:854272581929:web:d12e0077f7708bae139738",
  measurementId: "G-5BLB3C2GGL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {
  database,
  ref,
  onValue,
  set,
  remove,
  get,
  child,
  increment,
  update
};
