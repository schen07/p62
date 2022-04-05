import firebase from "firebase";

const firebaseConfig={
  // Your web app's Firebase configuration
  
    apiKey: "AIzaSyC0QMaVWQEO-qvUEqqwc6honklF7ZAUgDs",
    authDomain: "schoolattendance-66bce.firebaseapp.com",
    projectId: "schoolattendance-66bce",
    storageBucket: "schoolattendance-66bce.appspot.com",
    messagingSenderId: "762342103423",
    appId: "1:762342103423:web:c06f6d42104a87792da24a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.database();