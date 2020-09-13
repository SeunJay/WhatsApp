import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC61qLXBIHGiTyWlXCvX8VLAWAQHctHPuo",
  authDomain: "whatsapp-mern-73d24.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-73d24.firebaseio.com",
  projectId: "whatsapp-mern-73d24",
  storageBucket: "whatsapp-mern-73d24.appspot.com",
  messagingSenderId: "715363960111",
  appId: "1:715363960111:web:b46561dde8cce8ce8ecdda",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
