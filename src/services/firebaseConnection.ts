import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const API_KEY = import.meta.env.VITE_API_KEY
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const PROJETCT_ID = import.meta.env.VITE_PROJECT_ID
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET
const SENDER_ID = import.meta.env.VITE_SENDER_ID
const APP_ID = import.meta.env.VITE_APP_ID

const firebaseConfig = {

  apiKey: API_KEY,

  authDomain: AUTH_DOMAIN,

  projectId: PROJETCT_ID,

  storageBucket: STORAGE_BUCKET,

  messagingSenderId: SENDER_ID,

  appId: APP_ID

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore };