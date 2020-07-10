import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '../actions';

class GetPlanets extends React.Component {
  componentDidMount() {
    this.props.getData('planets');
  }

  render() {
    return (
      <div />
    );
  }
}

export default connect(null, { getData })(GetPlanets);

GetPlanets.prototypes = {
  getData: PropTypes.func.isRequired,
};
