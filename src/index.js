import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import combinedReducers from 'store/index'
import App from './connectors/App/App'
import * as serviceWorker from './serviceWorker'
import './index.css'

import rootReducer from './store/reducers/rootReducer'


//Create my store, is wrapping in all my applications
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>

, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()



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


// import React from 'react'
// import ReactDOM from 'react-dom'
// import '/index.css'
// import App from './connectors/App/App'
// import registerServiceWoker from '.'
// import { createStore } from 'redux'
