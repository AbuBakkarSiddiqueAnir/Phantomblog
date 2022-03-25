import firebase from "firebase/app"
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBY7ypLZy6CxRaZKv3-2-VmPswf5xmkxxM",
    authDomain: "fireblog-49cfb.firebaseapp.com",
    projectId: "fireblog-49cfb",
    storageBucket: "fireblog-49cfb.appspot.com",
    messagingSenderId: "985641048696",
    appId: "1:985641048696:web:90c608eda1656f17f6ab8d",
    measurementId: "G-7RSDP9S9YK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export default firebaseApp.firestore();
  export {timestamp}
