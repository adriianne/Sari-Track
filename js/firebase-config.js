// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5UfPcgv8x8F_AnFNPOeOnCwqplJ1n8zg",
    authDomain: "sari-track-e8efe.firebaseapp.com",
    databaseURL: "https://sari-track-e8efe-default-rtdb.firebaseio.com/",
    projectId: "sari-track-e8efe",
    storageBucket: "sari-track-e8efe.firebasestorage.app",
    messagingSenderId: "554784936185",
    appId: "1:554784936185:web:2dec2a0e1eb78ab8f05228",
    measurementId: "G-ZL4W3RP7Z5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();