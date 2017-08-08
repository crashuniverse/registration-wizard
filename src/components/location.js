import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { address: props.location };
    this.onChange = (address) => this.setState({
      address
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.address);
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>Enter location</div>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Location;
