import React from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



firebase.initializeApp({ 
      apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
      authDomain: "foodie-82b8e.firebaseapp.com"
    })

class App extends React.Component {
  state={ isSignIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ], 
    callback: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignIn: !!user })
    })
  }


  // constructor() {
  //   super()
  //   this.state = {
  //     data: [
  //       { message: 'init', name: ''},
  //     ]
  //   }
  // }
  render() { 
    return (
        <div className="App">
          {this.state.isSignIn ? (
            <span>
            <div>Signed In</div>   
            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
            <h1>Välkommen {firebase.auth().currentUser.displayName}</h1>
            </span>
          ) : (
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()} 
            />
          )}


         {/* <FirebaseManager dataSync={(payload) => {
          this.setState({data: payload}) }} />
        <h1>Hej</h1>
        <ul>
          {this.state.data.map((item, i) => {
            return (<li key={['item',i].join('-')} >{item.message}</li>) 
          })} 
        </ul> */}
        
      </div>
     
    )
  }
}


export default App;
