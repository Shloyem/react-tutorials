import React from 'react';
import logo from './logo.svg';
import picture from './hummus-pic.jpg';
import './App.css';
import Cheers from './Cheers'

function App() {
  const stringExample:string = 'Im a string!';
  const jsxElementExample:JSX.Element = <p>Im a string inside an jsx element of p!</p>;
  const boolExample:boolean = true;
  const arrayExample:string[] = ['Brazil', 'Argentina', 'Peru'];
  const jsxListItemArrayExample:JSX.Element[] = [<li>Brazil</li>, <li>Argentina</li>, <li>Peru</li>]
  
  return (
    <div className="App">
      <header className="App-header">

        {/* Came with the create-react-app
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
        </a> */}
        
        {/* Examples additions */}
        {stringExample}
        {jsxElementExample}
        { boolExample === true ? <span>bool is true</span> : <span>bool is false</span>}
        <p>{arrayExample.map(country => <span> {country} </span>)}</p>
        <ul className="Nations">
          {jsxListItemArrayExample}
        </ul>
        <Cheers/>
        <img src={picture} className="App-logo" alt="hummus" />
        {/* valid in HTML but not JSX examples */}
        {/* 1. class is a saved word in js and therefore not allowed here */}
        {/* <ul class="Nations"></ul> */}
        {/* 2. Each JSX element requires a "self-closing" or "void" tag. The '/'   */}
        {/* <img src={picture} className="App-logo" alt="hummus"> */}
      </header>
    </div>
  );
}

export default App;
