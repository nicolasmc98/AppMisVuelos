import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
    apiKey: "AIzaSyCIr07WvdQY-q_JonCLAwSf8O4Zkf-5d18",
    authDomain: "proyectoappmisvuelos.firebaseapp.com",
    projectId: "proyectoappmisvuelos",
    storageBucket: "proyectoappmisvuelos.appspot.com",
    messagingSenderId: "188657886231",
    appId: "1:188657886231:web:9ab886ee2ad548db206852",
    measurementId: "G-RE84P2BZC5"
  };
  
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);