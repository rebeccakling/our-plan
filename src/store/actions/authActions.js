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
const _onSyncChange = createAction(ONCHANGE)
export const onSyncChange = payload => (dispatch, getState ) => {
	dispatch(_onSyncChange(payload))
}

export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore}) => {
		const firebase = getFirebase()
		const firestore = getFirestore()

		firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstname[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP'})
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err })	
    })	
	}
}
