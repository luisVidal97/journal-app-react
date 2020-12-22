import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAvNRqrtlX6IvaemBZ54f7k6VZoOuHiGEg",
  authDomain: "react-app-courses-c7dfd.firebaseapp.com",
  projectId: "react-app-courses-c7dfd",
  storageBucket: "react-app-courses-c7dfd.appspot.com",
  messagingSenderId: "981647805999",
  appId: "1:981647805999:web:5e8f75bc811d26ec49c0da"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}