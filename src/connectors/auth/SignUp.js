import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

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
                    <h5 className="grey text text-darken-3">Bli Medlem</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email adress</label>
                        <input type="email" id="email" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Lösenord</label>
                        <input type="password" id="password" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Efterman</label>
                        <input type="text" id="firstName" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Efterman</label>
                        <input type="text" id="lastName" oChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Bli medlem</button>
                    </div>
                </form>   
            </div>
        )
    }
}

export default SignUp