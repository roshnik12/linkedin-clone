import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyChkXWmunR5xSsWU1pERFZqH5XGDH4DC5w",
    authDomain: "linkedin-clone-bc8b2.firebaseapp.com",
    projectId: "linkedin-clone-bc8b2",
    storageBucket: "linkedin-clone-bc8b2.appspot.com",
    messagingSenderId: "440149064548",
    appId: "1:440149064548:web:7d3015ab32990a84645871"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };