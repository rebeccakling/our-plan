import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux'
import { isEmpty, withFirebase } from 'react-redux-firebase'

const Navbar = (props) => {
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  const links = !isEmpty(auth) ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Our Plan</Link>
        { links }
      </div>
    </nav>
  )
}

export default withFirebase(Navbar)

