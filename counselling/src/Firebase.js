import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbUK_kX6l-GtrEy0fyy074pIoCBCLqx8M",
    authDomain: "counselling-4c1b6.firebaseapp.com",
    databaseURL: "https://counselling-4c1b6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "counselling-4c1b6",
    storageBucket: "counselling-4c1b6.appspot.com",
    messagingSenderId: "91694702131",
    appId: "1:91694702131:web:5f44be9d4554f61247cd46",
    measurementId: "G-91TE4NB76M"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;