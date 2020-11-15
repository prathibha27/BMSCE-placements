import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCnp6qW6vVosrLO8kW_8n0KcSuvfUJzLSE",
    authDomain: "bmsce-placements.firebaseapp.com",
    databaseURL: "https://bmsce-placements.firebaseio.com",
    projectId: "bmsce-placements",
    storageBucket: "bmsce-placements.appspot.com",
    messagingSenderId: "399817062249",
    appId: "1:399817062249:web:753f02dc0d681181c6aff8",
    measurementId: "G-NPR76KVVDG"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }

  export { firebase };