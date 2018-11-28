import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBeEyj58cFvd7WL6kU4bLMeZJxo2x3sfX4",
  authDomain: "marioplan-95b1c.firebaseapp.com",
  databaseURL: "https://marioplan-95b1c.firebaseio.com",
  projectId: "marioplan-95b1c",
  storageBucket: "marioplan-95b1c.appspot.com",
  messagingSenderId: "880037836678"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
