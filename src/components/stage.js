import React, { Component } from 'react';

class Stage extends Component {
  render() {
    const { stage } = this.props;
    return (
      <div className="stage">
        <span>Stage </span>
        <span>{`${stage}/3`}</span>
      </div>
    );
  }
}

export default Stage;
