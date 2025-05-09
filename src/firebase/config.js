import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu4n1vIuQcEAxd0IAep3vIuhDr0DtIoNE",
    authDomain: "trackmyprep-f6cf7.firebaseapp.com",
    projectId: "trackmyprep-f6cf7",
    storageBucket: "trackmyprep-f6cf7.firebasestorage.app",
    messagingSenderId: "614265159001",
    appId: "1:614265159001:web:553ab07bb3bf460beba048"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

