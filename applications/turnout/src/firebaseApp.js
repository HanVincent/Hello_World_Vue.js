import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBdYH83avh69Zx-K5kLCwHTZfY5X6j_Ua0",
  authDomain: "turnout-79314.firebaseapp.com",
  databaseURL: "https://turnout-79314.firebaseio.com",
  projectId: "turnout-79314",
  storageBucket: "turnout-79314.appspot.com",
  messagingSenderId: "201405229782"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')