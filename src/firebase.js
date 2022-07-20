import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpDRz0opm03YZf-4x0q40RAoTqEHTVcGY",
    authDomain: "slack-clone-88f9a.firebaseapp.com",
    projectId: "slack-clone-88f9a",
    storageBucket: "slack-clone-88f9a.appspot.com",
    messagingSenderId: "235276885130",
    appId: "1:235276885130:web:ad3a3c71dd20210e2b2173",
    measurementId: "G-7P1XVM4YMF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 

  export default db;
