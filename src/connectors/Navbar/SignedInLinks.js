import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
   
  let initials = props.profile.initials || ''
  let output = '' 

  if (initials !== 'undefined' && initials !== '' && initials !== null) { 
    output = initials
  }

	return (
		<ul className="right">
      <li><NavLink to='/CreateProject'>New Project</NavLink></li>
      <li style={{cursor: 'pointer'}}><span onClick={props.signOut}>Log Out</span></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
      {output}
      </NavLink></li>
    </ul>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)