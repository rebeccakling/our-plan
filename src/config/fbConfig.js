import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIy-mQLSQ1dKppi__gdhBsWZ3y_-Ox23M",
  authDomain: "master-thesis-foodie.firebaseapp.com",
  databaseURL: "https://master-thesis-foodie.firebaseio.com",
  projectId: "master-thesis-foodie",
  storageBucket: "master-thesis-foodie.appspot.com",
  messagingSenderId: "338631578892",
  appId: "1:338631578892:web:79d4bafee682f24555a529",
  measurementId: "G-Z8Y53VEQ4Q"
}

 firebase.initializeApp(firebaseConfig) 
 firebase.firestore()


export default firebase