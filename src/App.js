import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from 'firebase'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from 'connectors/SignIn/signIn'
import About from 'connectors/About/About'
import Navbar from 'connectors/Navbar/navbar'
import RestaurantsPage from 'connectors/RestaurantsPage/restaurants'
import FirebaseManager from 'connectors/FirebaseManager'


if (firebase.apps.length < 1) {
  firebase.initializeApp({ 
    apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
    authDomain: "foodie-82b8e.firebaseapp.com",
    databaseURL: "https://foodie-82b8e.firebaseio.com",
  })
}

const mapStateToProps = state => ({
  auth: state.auth,
  color: state.navbar.color,
  hejhej: 'hello'
})

const mapDispatchToProps = dispatch => ({})

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <FirebaseManager firebase={firebase} />
        <div className="App" style={{backgroundColor: this.props.color}}>

          <Navbar />
          {this.props.hejhej}
          <Switch>
            <Route exact path="/" component={ () =><SignIn firebase={firebase} />} />
            <Route path="/about" component={ About } />
            <Route path="/restaurants" component={ RestaurantsPage } />
          </Switch>

          {(this.props.auth.isLogedIn) && (
            <span>
              {this.props.auth.restaurants.map((item,i) => {
                return (<li key={`restaurants-listing-${i}`}>
                  {item.name}
                </li>
              )

              })}
            </span>
          )}
        </div>
      </BrowserRouter>
     
    )
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(App);
