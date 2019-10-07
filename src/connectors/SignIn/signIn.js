import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { actionCreators } from './actions'


const mapStateToProps = state => ({
	auth: state.auth
})

const mapDispatchToProps = dispatch => ({
 actions: bindActionCreators(actionCreators, dispatch),
})

class signIn extends Component {
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false,
			signInSuccessWithAuthResult: () => false,
		}
	}
	
	render() {
		return (
			<div>
				{this.props.auth.isLogedIn ? (
					<span>
						<div>Signed In</div>   
						<button onClick={()=>this.props.firebase.auth().signOut()}>
							Sign Out
						</button>
							<h1>Välkommen {this.props.firebase.auth().currentUser.displayName}</h1>
					</span>
				) : (
					<StyledFirebaseAuth
						uiConfig={this.uiConfig}
						firebaseAuth={this.props.firebase.auth()} 
					/>
				)}
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
 	mapDispatchToProps,
)(signIn)
