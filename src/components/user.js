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
        <div>Email</div>
        <div>
          <input type="email"
            placeholder="john.doe@example.com"
            required
            value={this.state.email}
            onChange={this.onChangeEmail} />
        </div>
        <div>Mobile Number</div>
        <div>
          <input type="tel"
            placeholder="+44 1234 S678"
            required
            value={this.state.phone}
            onChange={this.onChangePhone} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default User;
