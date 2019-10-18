import React from 'react'
import { NavLink } from 'react-router-dom'



const SignedOutLinks = () => {
	return (
    <ul className="right">
      <li><NavLink to='/signup'>Registrera dig</NavLink></li>
      <li><NavLink to='/signin'>Logga In</NavLink></li> 
    </ul>
	)
}

export default SignedOutLinks