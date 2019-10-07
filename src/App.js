import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from 'firebase'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SignIn from 'connectors/SignIn/signIn'
import About from 'connectors/About/About'
import FirebaseManager from 'connectors/FirebaseManager'
import './App.css'


if (firebase.apps.length < 1) {
  firebase.initializeApp({ 
    apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
    authDomain: "foodie-82b8e.firebaseapp.com"
  })
}

const mapStateToProps = state => ({
	auth: state.auth
})

const mapDispatchToProps = dispatch => ({})

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <FirebaseManager firebase={firebase} />
        <div className="App">
          <Link to="/"> Home</Link> | 
          <Link to="/about"> About</Link>

          <Switch>
            <Route exact path="/" component={ () =><SignIn firebase={firebase} />} />
            <Route path="/about" component={ About } />
          </Switch>

          { (this.props.auth.isLogedIn) && (
            <span>
              Du är inloggad. Glöm inte att logga ut när du är klar
            </span>
          )}
        </div>
      </BrowserRouter>
     
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
