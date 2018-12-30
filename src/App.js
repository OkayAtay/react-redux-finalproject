import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PotluckList from './containers/PotluckList'

class App extends Component {
  render() {
    console.log("potlucks", this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to my React/Redux Potluck App.
            <PotluckList />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
