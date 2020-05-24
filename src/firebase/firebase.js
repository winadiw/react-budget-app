import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYnd-Z_FvGtSBM3s-4GglJhQ0U6PTWlds",
  authDomain: "win-expensify-app.firebaseapp.com",
  databaseURL: "https://win-expensify-app.firebaseio.com",
  projectId: "win-expensify-app",
  storageBucket: "win-expensify-app.appspot.com",
  messagingSenderId: "591365617922",
  appId: "1:591365617922:web:8dec68513289e29942aa1b"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 firebase.database().ref().set({
   name: 'Winadi Wiratama'
 })