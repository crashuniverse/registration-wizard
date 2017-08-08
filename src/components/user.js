import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      phone: props.phone
    };
    this.onChange = (field, event) => this.setState({
      [field]: event.target.value
    });
    this.onChangeEmail = this.onChange.bind(this, 'email');
    this.onChangePhone = this.onChange.bind(this, 'phone');
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.phone);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Email</label>
        <div>
          <input type="email"
            placeholder="john.doe@example.com"
            required
            value={this.state.email}
            onChange={this.onChangeEmail} />
        </div>
        <label>Mobile Number</label>
        <div>
          <input type="tel"
            placeholder="+44 1234 S678"
            required
            value={this.state.phone}
            onChange={this.onChangePhone} />
        </div>
        <button onClick={this.props.onGoBack}>Go Back</button>
        <button type="submit">Submit User Details</button>
      </form>
    );
  }
}

export default User;
