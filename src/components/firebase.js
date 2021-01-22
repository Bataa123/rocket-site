import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARGDwXELgLxxlCJ-wp-Rt5Yx-Wx5yY1Qo",
  authDomain: "gobi-space.firebaseapp.com",
  databaseURL: "https://gobi-space.firebaseapp.com",
  projectId: "gobi-space",
  storageBucket: "gobi-space.appspot.com",
  messagingSenderId: "946503562646",
  appId: "1:946503562646:web:fd578a0260019871bbd9b7",
  measurementId: "G-MFC673MQL8",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
