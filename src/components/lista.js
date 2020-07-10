import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSTARSWARS } from '../action/index';

export class Lista extends Component {
  componentDidMount() {
    const { fetchSTARSWARS } = this.props;
    fetchSTARSWARS();
  }
  render() {
    return (
      <div>
        hello
      </div>
    );
  };
};

export default connect(null, { fetchSTARSWARS })(Lista)

fetchSTARSWARS.propTypes = {
  fetchSTARSWARS: PropTypes.func.isRequired,
};
