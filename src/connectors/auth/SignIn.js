import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
import { signIn } from '../../store/actions/authActions'
import { withRouter } from 'react-router'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  render() {
    if (!isEmpty(this.props.auth) && this.props.location.pathname === '/signin') {
      return <Redirect to='/' />
    }

    const { authError } = this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} value={this.state.email}  />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}  value={this.state.password} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SIGN IN</button>
              <div className="red-text center">
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>
        </form>   
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signIn: (creds) => dispatch(signIn(creds))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
 