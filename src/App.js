import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage';
import Location from './components/location';

class App extends Component {
  state = {
    stage: 1,
    location: '',
    email: '',
    phone: ''
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>User Registration Wizard</h2>
        </div>
        <Stage />
        <Location />
      </div>
    );
  }
}

export default App;
