import React from 'react'
import { NavLink } from 'react-router-dom'



const SignedInLinks = () => {
	return (
		<ul className="right">
            <li><NavLink to='/CreateProject'>Nytt Projekt</NavLink></li>
            <li><NavLink to='/'>Logga Ut</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>FF</NavLink></li>
        </ul>
	)
}

export default SignedInLinks