import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage';
import Location from './components/location';
import User from './components/user';
import Summary from './components/summary';
import { post } from './utilities/api';

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
      stage: 2,
      location
    });
  }

  onChooseUserDetails(email, phone) {
    this.setState({
      stage: 3,
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
    post(payload)
    .then(() => {
      this.setState({
        stage: 4
      });
    });
  }

  render() {
    const { stage, location, email, phone } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>User Registration Wizard</h2>
        </div>
        <Stage
          stage={stage} />
        {
          stage === 1 &&
          <Location
            location={location}
            onSubmit={this.onChooseLocation} />
        }
        {
          stage === 2 &&
          <User
            email={email}
            phone={phone}
            onSubmit={this.onChooseUserDetails} />
        }
        {
          stage === 3 &&
          <Summary
            location={location}
            email={email}
            phone={phone}
            onSubmit={this.onConfirm} />
        }
        {
          stage === 4 &&
          <div>User details submitted successfully.</div>
        }
      </div>
    );
  }
}

export default App;
