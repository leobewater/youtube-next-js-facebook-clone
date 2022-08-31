// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp  } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPGAFVU-RoN-Pal4fAxlWAoAGMWt68sZU",
    authDomain: "nextjs-facebook-clone-8d6fc.firebaseapp.com",
    projectId: "nextjs-facebook-clone-8d6fc",
    storageBucket: "nextjs-facebook-clone-8d6fc.appspot.com",
    messagingSenderId: "722681961413",
    appId: "1:722681961413:web:87f38aad0d17ffa37e49ac"
};

// Initialize Firebase
// const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
//const app = initializeApp(firebaseConfig);
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }