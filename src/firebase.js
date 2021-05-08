import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDThInz3YLmOVJLi9aG6Tim8g5nMvU7V94",
    authDomain: "hello-whiz-10195.firebaseapp.com",
    databaseURL: "https://hello-whiz-10195-default-rtdb.firebaseio.com",
    projectId: "hello-whiz-10195",
    storageBucket: "hello-whiz-10195.appspot.com",
    messagingSenderId: "1026097948874",
    appId: "1:1026097948874:web:02046f4a030a1e96576c33",
    measurementId: "G-WMXV64RK4E"
};
firebase.initializeApp(config);

export default firebase;