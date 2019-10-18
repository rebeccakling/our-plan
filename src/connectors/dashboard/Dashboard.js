import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    const { projects } = this.props
    //if (!auth.isLogedIn) return <Redirect to='signin' />
    return ( 
      <div className="dashboard container">
        <div className="row">
            {/* Till projekt  */}
          <div className="col s12 m6">
              <ProjectList  projects={projects}/>
          </div>
            {/* Till Notifications */}
          <div className="col s12 m5 offset-m1">
              <Notifications />
          </div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.auth

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)