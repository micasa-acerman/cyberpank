
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBTf9gET7N1S6fBQTOHOlHWNar2l9IJuwc',
    authDomain: 'react-chat-8f283.firebaseapp.com',
    databaseURL: 'https://react-chat-8f283.firebaseio.com',
    projectId: 'react-chat-8f283',
    storageBucket: 'react-chat-8f283.appspot.com',
    messagingSenderId: '151504121252',
    appId: '1:151504121252:web:889c61d8448f66d587e531'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app