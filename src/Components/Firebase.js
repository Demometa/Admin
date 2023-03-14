// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC031OYyUTRW-aLJjWrUXJsAmSt7BtFg9o",
  authDomain: "my-new-post-project.firebaseapp.com",
  projectId: "my-new-post-project",
  storageBucket: "my-new-post-project.appspot.com",
  messagingSenderId: "1010741454873",
  appId: "1:1010741454873:web:c72dbb413ffdf2ceaf6288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

}

const auth = getAuth(app);
const db = getFirestore(app);
export {auth};
export  {db};
export {firebase};

