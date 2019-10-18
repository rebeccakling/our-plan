import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'



const SignedInLinks = (props) => {
   
	return (
		<ul className="right">
      <li><NavLink to='/CreateProject'>Nytt Projekt</NavLink></li>
      <li><a href="" onClick={props.signOut}>Logga Ut</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>FF</NavLink></li>
    </ul>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)