import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3PoL0qO3L-GQc8Zi2pE3cqm8Tgcr-_Tc",
    authDomain: "feneriumfirebase.firebaseapp.com",
    projectId: "feneriumfirebase",
    storageBucket: "feneriumfirebase.appspot.com",
    messagingSenderId: "846005727234",
    appId: "1:846005727234:web:190ccbc127fef378eff71b",
    measurementId: "G-J2QEC44MR0"
}

let app = null;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase;