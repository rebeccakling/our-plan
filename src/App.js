import React from 'react';
import './App.css';
import FirebaseManager from  './components/FirebaseManager'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {message: 'Loading', name: 'whatever'},
      ]
    }
  }
  render() {
    
    return (
      <div className="App">
        <FirebaseManager dataSync={(payload) => {
          this.setState({data: payload})
        }}/>
        <h1 className="title font">Hej</h1>
        <ul>
          {this.state.data.map((item, i) => {
            return (<li key={['item',i].join('-')} >{item.message}</li>) 
          })}
        </ul>
        
      </div>
    )
  }
}


export default App;
