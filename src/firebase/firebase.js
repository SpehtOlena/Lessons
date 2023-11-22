import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
	apiKey: "AIzaSyD_XHOdptQ0QncrpcvlJE5bflgk4VpB8FY",
	authDomain: "crisp-6bbb6.firebaseapp.com",
	projectId: "crisp-6bbb6",
	storageBucket: "crisp-6bbb6.appspot.com",
	messagingSenderId: "553417126502",
	appId: "1:553417126502:web:1c8c7e7df055ae1e6a33a7",
	measurementId: "G-W29ESF5JLM"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const database = firebase.database();

export { app, firestore, storage, auth, database }

