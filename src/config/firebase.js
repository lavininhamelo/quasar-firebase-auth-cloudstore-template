import _firebase from "firebase";

const config = {
  apiKey: "AIzaSyBFeCbJBY7sB835WGUU_7ROQ5cRPlKxr00",
  authDomain: "bicicletaeletricacampogrande.firebaseapp.com",
  databaseURL: "https://bicicletaeletricacampogrande.firebaseio.com",
  projectId: "bicicletaeletricacampogrande",
  storageBucket: "bicicletaeletricacampogrande.appspot.com",
  messagingSenderId: "1059727381077",
  appId: "1:1059727381077:web:e109b2d8a41c7f73583adc",
  measurementId: "G-S41D7CK61S"
};

export const firebase = _firebase.initializeApp(config);
export const db = _firebase.firestore();
export const auth = _firebase.auth();
