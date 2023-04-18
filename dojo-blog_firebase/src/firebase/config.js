import firebase from '/firebase/app'
import 'firebase/firestore'


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

// initialise firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }