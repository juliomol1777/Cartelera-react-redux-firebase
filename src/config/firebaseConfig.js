import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyANCiEJ5ETie3GwwQXCs4r66nlbz0ZV60c",
  authDomain: "dosloginreact.firebaseapp.com",
  databaseURL: "https://dosloginreact.firebaseio.com",
  projectId: "dosloginreact",
  storageBucket: "dosloginreact.appspot.com",
  messagingSenderId: "268079550608",
  appId: "1:268079550608:web:8f0f61064f1e32d3acc815"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;