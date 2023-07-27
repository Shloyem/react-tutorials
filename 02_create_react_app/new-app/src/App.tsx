import React from 'react';
import logo from './logo.svg';
import picture from './hummus-pic.jpg';
import './App.css';
import Cheers from './Cheers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>
          <Cheers/>
        </h1>
        <img src={picture} className="App-logo" alt="hummus" />
      </header>
    </div>
  );
}

export default App;
