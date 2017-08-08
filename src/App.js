import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage';
import Location from './components/location';
import User from './components/user';
import Summary from './components/summary';

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
    this.onChooseUserDetails = this.onChooseUserDetails.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onChooseLocation(location) {
    this.setState({
      location
    });
  }

  onChooseUserDetails(email, phone) {
    this.setState({
      email,
      phone
    });
  }

  onConfirm() {
    const { location, email, phone } = this.state;
    const payload = Object.assign({}, {
      location,
      email,
      phone
    });
    console.log(payload);
    // make a post call to an unknown destination
  }

  render() {
    const { location, email, phone } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>User Registration Wizard</h2>
        </div>
        <Stage />
        <Location
          location={location}
          onSubmit={this.onChooseLocation} />
        <User
          email={email}
          phone={phone}
          onSubmit={this.onChooseUserDetails} />
        <Summary
          location={location}
          email={email}
          phone={phone}
          onSubmit={this.onConfirm} />
      </div>
    );
  }
}

export default App;
