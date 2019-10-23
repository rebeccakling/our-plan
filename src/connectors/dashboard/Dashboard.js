import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends React.Component {
  render() {
    const { projects, notifications } = this.props
    return ( 
      <div className="dashboard container">
        <div className="row">
            {/* Till projekt  */}
          <div className="col s12 m6">
              <ProjectList  projects={projects}/>
          </div>
            {/* Till Notifications */}
          <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
          </div> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
    { collection: 'notifications', limit: 3 }
  ])
)(Dashboard)