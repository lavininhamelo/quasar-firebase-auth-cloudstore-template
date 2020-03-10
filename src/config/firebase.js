import _firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

export const firebase = _firebase.initializeApp(config);
export const db = _firebase.firestore();
export const auth = _firebase.auth();
