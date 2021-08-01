import firebase from "firebase";
import "firebase/firestore";
require("firebase/auth");



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };



  firebase.initializeApp(firebaseConfig);

const config = {};

config.auth = firebase.auth();
config.firestore = firebase.firestore();
config.database = firebase.database();
config.storage = firebase.storage();

export default config;