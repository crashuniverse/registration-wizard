import React, { Component } from 'react';

class Summary extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { location, email, phone } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit} className="summary">
        <strong>You have chosen:</strong>
        <br/><br/>
        <div>Location: {location}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <br/>
        <button type="submit">Save All Details</button>
      </form>
    );
  }
}

export default Summary;
