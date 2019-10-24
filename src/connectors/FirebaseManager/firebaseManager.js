// import React from "react"
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import PropTypes from 'proptypes'
// //import firebase from 'firebase'

// import { actionCreators } from './actions'

/*
//if (firebase.apps.length < 1) {
  firebase.initializeApp({ 
    apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
    authDomain: "foodie-82b8e.firebaseapp.com",
    databaseURL: "https://foodie-82b8e.firebaseio.com",
  })
//} Ska inte användas
*/

// const mapStateToProps = state => ({
// 	auth: state.auth
// })

// const mapDispatchToProps = dispatch => ({
//  actions: bindActionCreators(actionCreators, dispatch),
// })

// class FirebaseManager extends React.Component {

//     constructor() {
//         super()
//         this.getData = this.getData.bind(this)
//     }

//     getData(target) {
//         const firebase = this.props.firebase
//         let items = []
//         const db = firebase.database()
//         const rootRef = db.ref(target)
//           rootRef.on('value', snap => {
//             items = []
//             snap.forEach(childSnapshot => {
//               items.push({...childSnapshot.val(), key: childSnapshot.key})
//           })
//           this.props.actions.readData(items, target)
//         })        
//     }

//     addData(payload, target) {
//         const firebase = this.props.firebase
//         const db = firebase.database()
//         const rootRef = db.ref(target)
//         rootRef.push(payload, err => {
//         if (err) {
//         console.error('There was an error while pushing data');
//         return null
//         }
//         // add some response on success 

//         })       
//     }

//     componentDidMount() {
//         const firebase = this.props.firebase
// 		firebase.auth().onAuthStateChanged(user => {
// 			this.props.actions.firebaseAuthSync({ isLogedIn: !!user, user })
//         })
//         if (this.props.auth.isLogedIn) {
//             this.getData('restaurants')
//         }
//     }
//     componentWillReceiveProps(next) {
//         if (this.props.auth.isLogedIn !==  next.auth.isLogedIn && next.auth.isLogedIn === true) {
//             this.getData('restaurants')
//         }
//     }

//     render() {
//         const myObj = {
//             name: 'Yo',
//             adress: 'somewhere in sthlm',
//             tel: '070',
//             area: '2',
//             openinghours: '24/7',
//         }
//         return <button onClick={this.addData(myObj)} >Lägg till</button>
//     }
// }
// FirebaseManager.defaultProps = {
//   dataSync: () => {}
// }

// FirebaseManager.propTypes = {
//     dataSync: PropTypes.func,
// }



// export default connect(
//     mapStateToProps, 
//     mapDispatchToProps)
//     (FirebaseManager)