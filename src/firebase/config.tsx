import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBjkFiJbkXScJGh6d-z0jeYv_n8q7A1H-A',
  authDomain: 'my-money-657e4.firebaseapp.com',
  projectId: 'my-money-657e4',
  storageBucket: 'my-money-657e4.appspot.com',
  messagingSenderId: '486670845881',
  appId: '1:486670845881:web:83b1c9e3dc5dff43ab1868',
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const projectFirestore = getFirestore()
const projectAuth = getAuth()
const timestamp = Timestamp

export { projectFirestore, projectAuth, timestamp }