import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAcuXml8g4GXWcIMKOoXPTCtSCP3J8Q7e0",
    authDomain: "myapp-36d37.firebaseapp.com",
    databaseURL: "https://myapp-36d37-default-rtdb.firebaseio.com",
    projectId: "myapp-36d37",
    storageBucket: "myapp-36d37.appspot.com",
    messagingSenderId: "892468438718",
    appId: "1:892468438718:web:2baa0d8c907b2317d3e0ef"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;