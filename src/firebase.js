import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-VEF0NbUD1AIXSzp-8KHIr03wLMKW7Q",
  authDomain: "challenge-6332e.firebaseapp.com",
  databaseURL: "https://challenge-6332e.firebaseio.com",
  projectId: "challenge-6332e",
  storageBucket: "challenge-6332e.appspot.com",
  messagingSenderId: "265737098597",
  appId: "1:265737098597:web:5358e3da12bab5551b3d8c",
  measurementId: "G-Q65HSW7SSX"
};
// initializing fiebase app
const firebaseApp=firebase.initializeApp(firebaseConfig);  


// then initialize firestore
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};
