import firebase from 'firebase'
const config = {
 apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
 authDomain: "foodie-82b8e.firebaseio.com",
 databaseURL: "https://foodie-82b8e.firebaseio.com",
 projectId: "foodie-82b8e",
 storageBucket: "foodie-82b8e.appspot.com",
}
firebase.initializeApp(config)
export default firebase
export const loginAnonymously = () => {
 return new Promise((resolve, reject) => {
   firebase.auth().signInAnonymously().then((user) => {
     if (user) {
       resolve(user)
     }
   }).catch((error) => {
     const errorCode = error.code
     if (errorCode === 'auth/operation-not-allowed') {
       reject('You must enable Anonymous auth in the firebase Console.')
     } else {
       reject(error)
     }
   })
 })
}
export const signInWithEmailAndPassword = (email, pwd) => new Promise((resolve, reject) => {
 firebase.auth().signInWithEmailAndPassword(email, pwd).then(user => {
   resolve(user)
 })
 .catch(error => {
   reject(error.message)
 });
})