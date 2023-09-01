// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { apps, initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHQhCz26Et5hv21rekZrPc2mX8HQ4rYl0",
  authDomain: "bitebutler-e193b.firebaseapp.com",
  databaseURL: "https://bitebutler-e193b-default-rtdb.firebaseio.com",
  projectId: "bitebutler-e193b",
  storageBucket: "bitebutler-e193b.appspot.com",
  messagingSenderId: "634777165339",
  appId: "1:634777165339:web:27d1d7f091878094c062be",
  measurementId: "G-L5NVHNEY8M"
};

// Initialize Firebase
if (!apps.length) {
    app = initializeApp(config);
}
