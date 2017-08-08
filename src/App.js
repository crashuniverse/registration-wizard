import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage';
import Location from './components/location';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      location: '',
      email: '',
      phone: ''
    }
    this.onChooseLocation = this.onChooseLocation.bind(this);
  }

  onChooseLocation(location) {
    this.setState({
      location
    });
  }

  render() {
    const { location } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>User Registration Wizard</h2>
        </div>
        <Stage />
        <Location
          location={location}
          onSubmit={this.onChooseLocation} />
      </div>
    );
  }
}

export default App;
