import React, { Component } from 'react';

class Summary extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { location, email, phone } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>You have chosen:</div>
        <div>Location: {location}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Summary;
