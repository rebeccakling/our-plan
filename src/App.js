import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseManager from  './components/FirebaseManager'

function App() {

  return (
    <div className="App">
      <FirebaseManager />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
