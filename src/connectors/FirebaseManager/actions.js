import { createAction } from 'redux-actions'

export const FIREBASE_AUTH_STATE_SYNC = 'FIREBASE_AUTH_STATE_SYNC'
const _firebaseAuthSync = createAction(FIREBASE_AUTH_STATE_SYNC)
const firebaseAuthSync = (payload) => (dispatch) =>{
    dispatch(_firebaseAuthSync(payload))
}

export const actionCreators = {
    firebaseAuthSync,
}