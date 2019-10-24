import React from 'react'
import { withRouter } from 'react-router'
import {Switch, Route } from 'react-router-dom'
import Navbar from 'connectors/Navbar/navbar'
import Dashboard from 'connectors/dashboard/Dashboard'
import ProjectDetails from 'connectors/projects/ProjectDetails'
import SignIn from 'connectors/auth/SignIn'
import SignUp from 'connectors/auth/SignUp'
import CreateProject from 'connectors/projects/CreateProject'
import { useSelector } from 'react-redux'
import { isLoaded, withFirebase, isEmpty } from 'react-redux-firebase'

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
      </React.Fragment>
     
    )
  }

export default withRouter(withFirebase(App))
