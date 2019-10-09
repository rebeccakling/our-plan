import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



firebase.initializeApp({ 
  apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
  authDomain: "foodie-82b8e.firebaseapp.com"
})

class signIn extends Component {
	state={ 
		isSignIn: false,
		user: {} 
	}
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID
		], 
	}
	componentDidMount = () => {
		 firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignIn: !!user, user })
		})
	}
	render() {
		return (
			<div>
				{this.state.isSignIn ? (
					<span>
						<div>Signed In</div>   
						<button onClick={()=>firebase.auth().signOut()}>
							Sign Out
						</button>
							<h1>Hej, {firebase.auth().currentUser.displayName}</h1>
					</span>
				) : (
					<StyledFirebaseAuth
						uiConfig={this.uiConfig}
						firebaseAuth={firebase.auth()} 
					/>
				)}
			</div>
		)
	}
}

export default signIn 
