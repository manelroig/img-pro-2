import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutonomiaProps extends Component {
  render() {
    return (
      <ul><h3>Con PropTypes</h3>
      <li> Autonomía Prop: {this.props.km}km</li>
      </ul>
    );
  }
}

AutonomiaProps.propTypes = {
  km: PropTypes.number.isRequired,
};

export default AutonomiaProps;