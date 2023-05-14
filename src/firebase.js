import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA6iGi8iRQRLmtrkQ8F_orOU0yrF9KArZo",
    authDomain: "linkedin-clone-f4703.firebaseapp.com",
    projectId: "linkedin-clone-f4703",
    storageBucket: "linkedin-clone-f4703.appspot.com",
    messagingSenderId: "150195015952",
    appId: "1:150195015952:web:f5f060a3c6ee605c2c9595"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

export {db}