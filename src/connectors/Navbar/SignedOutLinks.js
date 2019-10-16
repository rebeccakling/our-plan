import React from 'react'
import { NavLink } from 'react-router-dom'



const SignedOutLinks = () => {
	return (
		<ul className="right">
            <li><NavLink to='/SignUp'>Registrera dig</NavLink></li>
            <li><NavLink to='/SignIn'>Logga In</NavLink></li> 
        </ul>
	)
}

export default SignedOutLinks