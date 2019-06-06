import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3wUT36tXy9upDGdwO_7vEH56dMbKp5ZQ",
    authDomain: "lb-fitness-tracker.firebaseapp.com",
    databaseURL: "https://lb-fitness-tracker.firebaseio.com",
    projectId: "lb-fitness-tracker",
    storageBucket: "lb-fitness-tracker.appspot.com",
    messagingSenderId: "157380079895",
    appId: "1:157380079895:web:83338e240fddd67e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;