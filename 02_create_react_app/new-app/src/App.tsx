import React from 'react';
import logo from './logo.svg';
import picture from './hummus-pic.jpg';
import './App.css';
import Cheers from './Cheers';
import CurrentDate from './CurrentDate';
import PropExample from './PropExample';

function App() {
  const stringExample: string = 'Im a string!';
  const jsxElementExample: JSX.Element = (
    <p>Im a string inside an jsx element of p!</p>
  );
  const boolExample: boolean = true;
  const arrayExample: string[] = ['Brazil', 'Argentina', 'Peru'];
  const jsxListItemArrayExample: JSX.Element[] = [
    <li>Brazil</li>,
    <li>Argentina</li>,
    <li>Peru</li>,
  ];
  const nations = ['Brazil', 'Argentina', 'Peru'];
  const listNations: JSX.Element[] = nations.map((nation, index) => (
    <li key={index}> {nation} </li>
  ));
  // option A
  const listNumbers: JSX.Element[] = Array.from({ length: 8 }, (_, i) => (
    <li key={8 - i}> {8 - i} </li>
  ));
  // option B
  const items: JSX.Element[] = [];
  for (let i = 8; i > 0; i--) {
    items.push(<li key={i}>{i}</li>);
  }

  type PlayerInfo = {
    name: string;
    lastName: string;
    team: string;
  };
  const playerKeyValues: PlayerInfo = {
    name: 'Leo',
    lastName: 'Messi',
    team: 'Barcelona',
  };
  const infoPairs: JSX.Element[] = [];
  // Option A: no index, not recommended!
  Object.entries(playerKeyValues).forEach(([key, value]) => {
    infoPairs.push(
      <p>
        {key}:{value}
        <br />
      </p>,
    );
  });
  // Option B: with index, good!
  // The index is used as the key prop of the <span> element. The key prop is a special string attribute you need to include when creating
  // lists of elements in React. Keys help React identify which items have changed, are added, or are removed, and they should be given to the
  // elements inside the array to give the elements a stable identity.

  // You can't omit the index in this case because you need it to provide a unique key prop to each <span> element.
  // If you don't provide a key prop, React will give you a warning in the console, and your app may have performance issues.
  // If the user object has unique keys, you could use those instead of the index
  const playerArray: JSX.Element[] = [];
  Object.entries(playerKeyValues).map(([key, value], index) => {
    playerArray.push(
      <span key={index}>
        {key}: {value}
      </span>,
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* Examples additions */}
        <PropExample name="Joe" streetName="El loco" />
        {/* {playerArray}
        {infoPairs}
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
        <Cheers/> */}
        <br />
        <br />
        <br />
        <br />
        <br />
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
