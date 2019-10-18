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