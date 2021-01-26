import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCsE5sPIYj20pPy_qaV_x0ybQcjeTOPDsI",
        authDomain: "fenerium-b65fc.firebaseapp.com",
        projectId: "fenerium-b65fc",
        storageBucket: "fenerium-b65fc.appspot.com",
        messagingSenderId: "450436459246",
        appId: "1:450436459246:web:c325b5c86853302d4361ff",
        measurementId: "G-Z96DXKBSFT"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
const realDb = firebase.database()
const auth = firebase.auth()
export { fireDb, realDb, auth }