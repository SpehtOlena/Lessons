import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: "AIzaSyBGATsLtTt4_Fspi-Rghn8OLMHgN_ctKVc",
	authDomain: "crispp-779b1.firebaseapp.com",
	projectId: "crispp-779b1",
	storageBucket: "crispp-779b1.appspot.com",
	messagingSenderId: "1073357412025",
	appId: "1:1073357412025:web:5f9350ce73333e8c0d2d68",
	measurementId: "G-M3K4Y7CZYF"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const database = firebase.database();

export { app, firestore, storage, auth, database }

