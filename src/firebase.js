import { initializeApp } from 'firebase/app'
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

    const firebaseConfig = {
      apiKey: "AIzaSyDWGOZbKGbBTLvbO5ITNDLG2lS1Nh60I7Y",
  authDomain: "winter-services-e28e5.firebaseapp.com",
  databaseURL: "https://winter-services-e28e5.firebaseio.com",
  projectId: "winter-services-e28e5",
  storageBucket: "winter-services-e28e5.appspot.com",
  messagingSenderId: "545725987913",
  appId: "1:545725987913:web:7609bcada8066f2ce5d398"
    }

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification }
