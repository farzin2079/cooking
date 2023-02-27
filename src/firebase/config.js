/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmfxj_v-XmweBkjRb9lo6lQMoy889_p9k",
    authDomain: "farzin-js.firebaseapp.com",
    projectId: "farzin-js",
    storageBucket: "farzin-js.appspot.com",
    messagingSenderId: "823188132817",
    appId: "1:823188132817:web:9ab6597a9c2d2016c0c6f0",
    measurementId: "G-MZZBSTE0NC"
  };

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();