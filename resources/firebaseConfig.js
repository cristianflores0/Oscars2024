import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

console.log('Firebase Config:', firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyD5vlXeFLqwHIqXJdvb7OnVqjyftPyJlws",
  authDomain: "oscars-37705.firebaseapp.com",
  projectId: "oscars-37705",
  storageBucket: "oscars-37705.appspot.com",
  messagingSenderId: "233322619230",
  appId: "1:233322619230:web:ba0bd245f062333ab4afcf",
  measurementId: "G-DQKGGC00MH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);