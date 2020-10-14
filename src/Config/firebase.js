import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDANWfaBJe54-ujAgXTDJpQh26AshGxXbc",
  authDomain: "whatsapp-clone-app-49306.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-app-49306.firebaseio.com",
  projectId: "whatsapp-clone-app-49306",
  storageBucket: "whatsapp-clone-app-49306.appspot.com",
  messagingSenderId: "821424978325",
  appId: "1:821424978325:web:6a384e8e97c42437165e9c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
