import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import firebase from 'firebase'

import { withRouter } from 'react-router'
import {Switch, Route } from 'react-router-dom'
// import SignIn from 'connectors/SignIn/signIn'
// import About from 'connectors/About/About'
import Navbar from 'connectors/Navbar/navbar'
// import RestaurantsPage from 'connectors/RestaurantsPage/restaurants'
// import FirebaseManager from 'connectors/FirebaseManager'


import Dashboard from 'connectors/dashboard/Dashboard'
import ProjectDetails from 'connectors/projects/ProjectDetails'
import SignIn from 'connectors/auth/SignIn'
import SignUp from 'connectors/auth/SignUp'
import CreateProject from 'connectors/projects/CreateProject'
import { useSelector } from 'react-redux'
import { isLoaded, withFirebase, isEmpty } from 'react-redux-firebase'


// if (firebase.apps.length < 1) {
//   firebase.initializeApp({ 
//     apiKey: "AIzaSyD__stvI0GuA21uUmghVZpeb5tHCgyTw8A",
//     authDomain: "foodie-82b8e.firebaseapp.com",
//     databaseURL: "https://foodie-82b8e.firebaseio.com",
//   })
// }

// const mapStateToProps = state => ({
//   // auth: state.auth,
//   // color: state.navbar.color,
//   // hejhej: 'hello'
// })

// const mapDispatchToProps = dispatch => ({})

const App = props => {

    const auth = useSelector(state => state.firebase.auth)
    if(!isLoaded(auth)) {
      return <div>Loading...</div>
    }

    if (isEmpty(auth) && props.location.pathname === '/signup') {
      return (
        <React.Fragment>
          <div className="App">
            <Navbar fb={props.fireb} />
            <SignUp />
          </div>
        </React.Fragment>  
      )
    }

    if (isEmpty(auth)) {
      return (
        <React.Fragment>
          <div className="App">
            <Navbar fb={props.fireb} />
            <SignIn />
          </div>
        </React.Fragment>  
      )
    }
    
    return (
      <React.Fragment>

        <div className="App">
          <Navbar fb={props.fireb} />
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/project/:id' component={ ProjectDetails } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/CreateProject' component={ CreateProject } />
          </Switch>
        </div>





        {/* <FirebaseManager firebase={firebase} />
        <div className="App" style={{backgroundColor: this.props.color}}> */}
        
          {/* <Navbar /> */}
          {/* {this.props.hejhej} */}
          {/* <Switch> */}
            {/* <Route exact path="/" component={ () =><SignIn firebase={firebase} />} />
            <Route path="/about" component={ About } />
            <Route path="/restaurants" component={ RestaurantsPage } /> */}
          {/* </Switch> */}

          {/* {(this.props.auth.isLogedIn) && (
            <span>
              {this.props.auth.restaurants.map((item,i) => {
                return (<li key={`restaurants-listing-${i}`}>
                  {item.name}
                </li>
              )

              })}
            </span>
          )} */}
        {/* </div> */}
      </React.Fragment>
     
    )
  }



// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps)
// (App);

export default withRouter(withFirebase(App))
