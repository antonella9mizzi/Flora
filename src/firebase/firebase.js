import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASu1r26qOJeYPQQABJOCWaEoNogd0j-i8",
    authDomain: "flora-coderhouse.firebaseapp.com",
    projectId: "flora-coderhouse",
    storageBucket: "flora-coderhouse.appspot.com",
    messagingSenderId: "888669293946",
    appId: "1:888669293946:web:2e99f94ee37e3898991ac3" 
};
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}
export const database = firebase.firestore()