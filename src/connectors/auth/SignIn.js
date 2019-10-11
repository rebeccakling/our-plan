import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
}
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey text text-darken-3">Logga In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email adress</label>
                        <input type="email" id="email" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Lösenord</label>
                        <input type="password" id="password" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Inloggad</button>
                    </div>
                </form>   
            </div>
        )
    }
}

export default SignIn
 