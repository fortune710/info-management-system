import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASh_UvBnwQV5sG-X4_eMO36UPHNQkLAfY",
  authDomain: "let-s-talk-32605.firebaseapp.com",
  projectId: "let-s-talk-32605",
  storageBucket: "let-s-talk-32605.appspot.com",
  messagingSenderId: "261499999710",
  appId: "1:261499999710:web:da1985d5b317832387394f",
  measurementId: "G-LMX5J3TGMF"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);

export default Firebase;