import { combineReducers } from 'redux'
import auth from 'connectors/FirebaseManager/reducer'
import restaurants from 'connectors/RestaurantsPage/reducer'

// Alla reducer måste vara här

export default combineReducers({
 auth,
 restaurants
})