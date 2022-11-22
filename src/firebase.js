import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZXFZ2snAw6odhd7irXbq1A7sWSuubcEk",
    authDomain: "disneyplus-clone-96371.firebaseapp.com",
    projectId: "disneyplus-clone-96371",
    storageBucket: "disneyplus-clone-96371.appspot.com",
    messagingSenderId: "796495954635",
    appId: "1:796495954635:web:b0c1389b076c4e8757514e",
    measurementId: "G-TM9YS2NC2E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
// const storage = firebase.storage();

export { auth, provider}
export default db;
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


// const firebaseApp = firebase.initializeApp(firebaseConfig); //baraabar
// const db = firebaseApp.firestore();
// const auth = firebase.auth(); //baraabar
// const provider = new firebase.auth.GoogleAuthProvider(); //baraabar
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;