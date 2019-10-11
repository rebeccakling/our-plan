// import React, { Component } from 'react'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { actionCreators } from './actions'
// import { NavLink } from 'react-router-dom'


// const mapStateToProps = state => ({
// 	auth: state.auth
// })

// const mapDispatchToProps = dispatch => ({
//  actions: bindActionCreators(actionCreators, dispatch),
// })

// class signIn extends React.Component {
// 	uiConfig = {
// 		signInFlow: "popup",
// 		signInOptions: [
// 			this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// 			this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
// 		],
// 		callbacks: {
// 			signInSuccess: () => false,
// 			signInSuccessWithAuthResult: () => false,
// 		}
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				{/* <ul className="right">
// 					<li><NavLink to='/'>Logga in</NavLink></li>
// 					<li><NavLink to='/'>Logga ut</NavLink></li>
					
// 				</ul> */}
// 				{this.props.auth.isLogedIn ? (
// 					<span>  
// 						<button onClick={()=>this.props.firebase.auth().signOut()}>
// 							Logga ut
// 						</button>
// 							<h1>Du är inloggad som {this.props.firebase.auth().currentUser.displayName}</h1>
// 					</span>
// 				) : (
// 					<StyledFirebaseAuth
// 						uiConfig={this.uiConfig}
// 						firebaseAuth={this.props.firebase.auth()} 
// 					/>
// 				)}
// 			</div>
// 		)
// 	}
// }

// export default connect(
// 	mapStateToProps,
//  	mapDispatchToProps,
// )(signIn)
