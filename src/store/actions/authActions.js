import { createAction } from 'redux-actions'


export const signIn = (credentials) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase()

		firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
		).then(() => {
			dispatch({ type: 'LOGIN' })
		}).catch((err) => {
			dispatch({ type: 'LOGIN_ERROR', err })
		})    
	}
}

export const signOut = () => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase()
		firebase.auth().signOut().then(() => {
			dispatch({ type:'LOGOUT' })
		})
	}
}

export const ONCHANGE = 'ONCHANGE'
export const _onSyncChange = createAction(ONCHANGE)

export const onSyncChange = payload => (dispatch, getState ) => {
	dispatch(_onSyncChange(payload))
}
export const RESET_SIGNUP_COMPLETED = 'RESET_SIGNUP_COMPLETED'
export const resetSignUp = () => dispatch => {
	dispatch({ type: 'RESET_SIGNUP_COMPLETED'})
}
export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore}) => {

		const firebase = getFirebase()
		const userName = `${newUser.firstName.toLowerCase()}-${newUser.lastName.toLowerCase()}`
		const displayName = `${newUser.firstName} ${newUser.lastName}`
		const email = newUser.email


		let initials = ''
  		if (newUser.firstName[0] !== 'undefined' && newUser.lastName !== '' && newUser.lastName !== null) { 
			initials = newUser.firstName[0].toUpperCase()
		}
		if (newUser.lastName !== 'undefined' && newUser.lastName !== '' && newUser.lastName !== null) { 
			initials = `${initials} ${newUser.lastName[0].toUpperCase()}`
		}

		firebase.createUser(
		{
			email,
			password: newUser.password
		},
    	{
			username: userName,
			email, 
			displayName,
			initials,
		}
	  ).then(() => {
		// action for signup completed
    })
	}
}
	  


