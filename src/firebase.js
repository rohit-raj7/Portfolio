// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics ,ref, onValue, set, increment} from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAozd4rZK6V-F2XpItCIUGkxJ8djlf0cCo",
//   authDomain: "portfolio-30f88.firebaseapp.com",
//   projectId: "portfolio-30f88",
//   storageBucket: "portfolio-30f88.firebasestorage.app",
//   messagingSenderId: "854272581929",
//   appId: "1:854272581929:web:d12e0077f7708bae139738",
//   measurementId: "G-5BLB3C2GGL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getAnalytics(app);

// export { database, ref, onValue, set ,increment};






// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue, set, increment } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAozd4rZK6V-F2XpItCIUGkxJ8djlf0cCo",
//   authDomain: "portfolio-30f88.firebaseapp.com",
//   projectId: "portfolio-30f88",
//   storageBucket: "portfolio-30f88.firebasestorage.app",
//   messagingSenderId: "854272581929",
//   appId: "1:854272581929:web:d12e0077f7708bae139738",
//   measurementId: "G-5BLB3C2GGL"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

// export { database, ref, onValue, set, increment };



import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, update, increment } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAozd4rZK6V-F2XpItCIUGkxJ8djlf0cCo",
  authDomain: "portfolio-30f88.firebaseapp.com",
  projectId: "portfolio-30f88",
  storageBucket: "portfolio-30f88.firebasestorage.app",
  messagingSenderId: "854272581929",
  appId: "1:854272581929:web:d12e0077f7708bae139738",
  measurementId: "G-5BLB3C2GGL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, set, update, increment };
 