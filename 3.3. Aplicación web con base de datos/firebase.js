
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc,
    } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh4bVqxgIANckHx8-Y6WV6qDGt2kQvPaU",
    authDomain: "fir-js-crud-52614.firebaseapp.com",
    projectId: "fir-js-crud-52614",
    storageBucket: "fir-js-crud-52614.appspot.com",
    messagingSenderId: "684149027476",
    appId: "1:684149027476:web:e331891bdeeeb0a6bbba81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
addDoc(collection(db,"tasks"),{title, description});

export const getTasks = () =>  getDocs(collection(db,'tasks'));

export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'), callback);

export const deleteTask = (id) => deleteDoc(doc(db,"tasks", id));

export  const getTask = (id) => getDoc(doc(db,"tasks", id));

export const updateTask = (id, newFields) => updateDoc(doc(db,"tasks", id), newFields);
