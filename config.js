import firebase from 'firebase'
require("@firebase/firestore")


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDBKEi-YsfJH0TRf1bB23qg0tGsIIyiTg",
    authDomain: "newsletter-90082.firebaseapp.com",
    databaseURL: "https://newsletter-90082-default-rtdb.firebaseio.com",
    projectId: "newsletter-90082",
    storageBucket: "newsletter-90082.appspot.com",
    messagingSenderId: "191538624139",
    appId: "1:191538624139:web:7147ebafe346164165868e"
  };


  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()