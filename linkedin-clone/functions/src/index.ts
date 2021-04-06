import * as functions from "firebase-functions";
//import * as firebase from 'firebase-admin';

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

//import * as firebase from 'firebase-admin';

//export const createAccount = firebase.auth.user().onCreate(event => {
//    const user = event.data;
//    console.log('user displayname', user.displayName);
 //   return;
//});