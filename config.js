import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHAOFiFe6ouDqGWAcyHNJDNtPFlklO6Jc",
    authDomain: "teamvotingapp-bb1ba.firebaseapp.com",
    projectId: "teamvotingapp-bb1ba",
    storageBucket: "teamvotingapp-bb1ba.appspot.com",
    messagingSenderId: "423988237822",
    appId: "1:423988237822:web:1fa467976f5d1b72cf5caf"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();