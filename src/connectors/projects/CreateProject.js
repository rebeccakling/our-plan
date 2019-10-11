import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
                    <h5 className="grey text text-darken-3">Skapa nytt project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Rubrik</label>
                        <input type="text" id="title" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Text</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handelChange}></textarea>  
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Publicera</button>
                    </div>
                </form>   
            </div>
        )
    }
}

export default CreateProject