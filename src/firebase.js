// NPM Packages
import firebase from "firebase/app";
import "firebase/storage";

// Constants
const firebaseConfig = {
  apiKey: "AIzaSyCZPPtigd4xv_DBxZ_rFfpNUUu1qFpUydk",
  authDomain: "eika-shopping-list.firebaseapp.com",
  projectId: "eika-shopping-list",
  storageBucket: "eika-shopping-list.appspot.com",
  messagingSenderId: "653358673616",
  appId: "1:653358673616:web:7c16d54abe10208fa3f8d5",
};

// Methods
firebase.initializeApp(firebaseConfig);

// Export to make it visible to React
export default firebase;
