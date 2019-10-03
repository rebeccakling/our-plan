import React from 'react';
import './App.css';
import firebase from 'firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from 'components/Auth/signIn';



class App extends React.Component {
  state={
    isSignIn: false,
    user: {},
  }


  // constructor() {
  //   super()
  //   this.state = {
  //     data: [
  //       { message: 'init', name: ''},
  //     ]
  //   }
  // }

  
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignIn: !!user, user })
		})
	}  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ SignIn } />
          </Switch>
          {this.state.isSignIn ? (
            <div>
                {this.state.user.displayName}
            </div>
            ) : (
              <div>
                 <h1>Vänligen logga in</h1>
              </div>
          )}


          {/* <FirebaseManager dataSync={(payload) => {
            this.setState({data: payload}) }} />
            <h1>Hej</h1>
          <ul>
            {this.state.data.map((item, i) => {
              return (<li key={['item',i].join('-')} >{item.message}</li>) 
            })} 
          </ul> */}
        
        </div>
      </BrowserRouter>
     
    )
  }
}


export default App;
