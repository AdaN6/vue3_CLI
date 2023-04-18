import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import { FirebaseApp, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyABkiaziqDmG89vAOFUcIwWzeSWBCY5sXE",
    authDomain: "vue-firebase-site-db936.firebaseapp.com",
    projectId: "vue-firebase-site-db936",
    storageBucket: "vue-firebase-site-db936.appspot.com",
    messagingSenderId: "820244895732",
    appId: "1:820244895732:web:123e61ac8a75dcb4274ba1"
  };

//   init firebase

firebase.initializeApp(firebaseConfig)
// const app: FirebaseApp = initializeApp(firebaseConfig);

// const db = getDatabase(app);

// const auth = getAuth(app);

// initialise firestore service
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp}