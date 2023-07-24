// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPnoK0KhLblJxAJ_Yzk1hJsOXsnbDY7E",
  authDomain: "genius-car-services-ddc8e.firebaseapp.com",
  projectId: "genius-car-services-ddc8e",
  storageBucket: "genius-car-services-ddc8e.appspot.com",
  messagingSenderId: "145225975098",
  appId: "1:145225975098:web:d43c62b887b06c183e3c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;