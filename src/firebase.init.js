import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHRnDWhQ8tRq3dHOcNZ95wuit9vrH7bRI",
    authDomain: "ranco-a0bb5.firebaseapp.com",
    projectId: "ranco-a0bb5",
    storageBucket: "ranco-a0bb5.appspot.com",
    messagingSenderId: "775789481609",
    appId: "1:775789481609:web:4b3555c113878daf944058",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
