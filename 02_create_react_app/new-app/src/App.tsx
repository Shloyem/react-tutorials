import React from 'react';
import logo from './logo.svg';
import picture from './hummus-pic.jpg';
import './App.css';
import Cheers from './Cheers'
import CurrentDate from './CurrentDate';

function App() {
  const stringExample:string = 'Im a string!';
  const jsxElementExample:JSX.Element = <p>Im a string inside an jsx element of p!</p>;
  const boolExample:boolean = true;
  const arrayExample:string[] = ['Brazil', 'Argentina', 'Peru'];
  const jsxListItemArrayExample:JSX.Element[] = [<li>Brazil</li>, <li>Argentina</li>, <li>Peru</li>]
  const nations = ['Brazil', 'Argentina', 'Peru'];
  const listNations:JSX.Element[] = nations.map((nation, index) => <li key={index}> {nation} </li>)
  // option A
  const listNumbers:JSX.Element[] = Array.from({length:8}, (_, i) => <li key={8-i}> {8-i} </li>)
  // option B
  const items:JSX.Element[] = []; for (let i = 8; i > 0; i--) { items.push(<li key={i}>{i}</li>); }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* Examples additions */}
        <ul>
          {listNumbers}
        </ul>
        {CurrentDate()}
        {listNations}
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