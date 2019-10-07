import * as actions from './actions'

const initialState = {
    isLogedIn: false,
    user: null,
    restaurants: [],
    comments: [],
    ratings: [],   
}

export const Reducer = (state = initialState, { type, payload }) => {
 switch (type) {
    case actions.FIREBASE_AUTH_STATE_SYNC:

      // merge previous state with our payload
      return {
        ...state,
        user: payload.user,
        isLogedIn: payload.isLogedIn,
      }

    case actions.READ_DATA:
      return {
        ...state,
        [payload.target]: payload.payload,
      }
   default:
     return state
 }
}
export default Reducer