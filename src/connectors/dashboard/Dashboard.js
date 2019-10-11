import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    render() {
        return ( 
             <div className="dashboard container">
                 <div className="row">
                     {/* Till projekt  */}
                     <div className="col s12 m6"></div>
                     <ProjectList />
                     {/* Till Notifications till höger */}
                     <div className="col s12 m5 offset-m1"></div> 
                     <Notifications />
                 </div>
             </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(
    mapStateToProps
    )
    (Dashboard)