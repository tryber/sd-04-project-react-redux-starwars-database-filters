import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo } from '../actions/actionCreators';

class GetPlanets extends React.Component {
  componentDidMount() {
    this.props.fetchingPlanetsInfo();
  }

  render() {
    return (
      <div />
    );
  }
}

export default connect(null, { fetchingPlanetsInfo })(GetPlanets);

GetPlanets.propTypes = {
  fetchingPlanetsInfo: PropTypes.func.isRequired,
};
