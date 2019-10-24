import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './store/reducers/rootReducer'
import firebaseConfig from './config/fbConfig'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebaseApp from 'firebase/app'
//import firebase from 'firebase'
import * as serviceWorker from './serviceWorker'
import App from './connectors/App/App'
import './index.css'


//Create my store, is wrapping in all my application 
const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseApp )
    )
  )
)

//Needed for the new version 
const rrfConfig = {
    firebaseConfig,
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
}

//Needed for the new version 
 const rrfProps = {
   firebase: firebaseApp,
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}



ReactDOM.render(
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
      <App fireb={firebaseApp} />
    </BrowserRouter>
   </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'))

serviceWorker.unregister()




