import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSWAPI } from '../actions';

class GetSWAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getSWAPI('planets');
  }

  render() {
    return <div />;
  }
}

export default connect(null, { getSWAPI })(GetSWAPI);

GetSWAPI.propTypes = {
  getSWAPI: PropTypes.func.isRequired,
};
