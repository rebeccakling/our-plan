import React from 'react'
// import { connect, useSelector } from 'react-redux'
// import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { onSyncChange as onSyncChangeActions} from 'store/actions/authActions'


class FirebaseManager extends React.Component {
	componentWillMount() {
		const firebase = this.props.fb
		firebase.auth().onAuthStateChanged(user => {
			onSyncChangeActions({ isLogedIn: !!user, user })
		})
	}
	render() {
		return  null
	}
}


export default FirebaseManager 