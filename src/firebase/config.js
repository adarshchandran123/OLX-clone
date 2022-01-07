import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCPHAISAa0aBSy5VdJ9k24bvS1GiDOOSa0",
    authDomain: "fir-olx-9f5d3.firebaseapp.com",
    projectId: "fir-olx-9f5d3",
    storageBucket: "fir-olx-9f5d3.appspot.com",
    messagingSenderId: "378914550381",
    appId: "1:378914550381:web:9b61a9dc4145566b84c564",
    measurementId: "G-XV0DTRNTC1"
  };

 export default firebase.initializeApp(firebaseConfig)