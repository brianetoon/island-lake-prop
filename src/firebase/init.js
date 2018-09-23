import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCo2QJL1STsbQ9Vcd7kujY-o65SMNKbqaw",
    authDomain: "island-lake-prop.firebaseapp.com",
    databaseURL: "https://island-lake-prop.firebaseio.com",
    projectId: "island-lake-prop",
    storageBucket: "island-lake-prop.appspot.com",
    messagingSenderId: "535134418493"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()