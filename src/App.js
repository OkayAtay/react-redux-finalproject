import React, { Component } from 'react';
import './App.css';
import PotluckList from './containers/PotluckList'


class App extends Component {
  render() {
    console.log("potlucks", this.props)
    return (
      <div className="App">
        <header className="App-header">
        <h2> Welcome to the Potluck Organizer - Let's Eat! </h2>
            <PotluckList />
        </header>
      </div>
    );
  }
}

export default App;
