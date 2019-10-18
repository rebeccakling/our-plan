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
console.log('store: ',store)

//Needed for the new version 
const rrfConfig = {
    firebaseConfig,
    useFirestoreForProfile: true,
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
      <App fb={firebaseApp} />
    </BrowserRouter>
   </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'))

serviceWorker.unregister()



// ----------------------------------------------------------
//Denna Fungerar
// import React from 'react'
// // import { createStore, applyMiddleware, compose } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import ReactDOM from 'react-dom'
// // import combinedReducers from 'store/index'
// import App from './connectors/App/App'
// import * as serviceWorker from './serviceWorker'
// import './index.css'

// import rootReducer from './store/reducers/rootReducer'
// import { createStore, applyMiddleware, compose } from 'redux'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
// import fbConfig from './config/fbConfig'


// //Create my store, is wrapping in all my applications
// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         // reduxFirestore(fbConfig),
//         // reactReduxFirebase(fbConfig)
//         )
//     )

// ReactDOM.render(
//     <Provider store={store}> 
//         <App />
//     </Provider>

// , document.getElementById('root'))
// serviceWorker.unregister()

// --------------------------------------------------------------
 
// //Create my store, is wrapping in all my applications
// const store = createStore(combinedReducers, compose(
//  applyMiddleware(thunk),
//  window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

// ReactDOM.render(
//     <Provider store={store}> 
//         <App />
//     </Provider>

// , document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()


