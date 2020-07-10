// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSTARSWARS } from '../action/index';

export class Lista extends Component {
  componentDidMount() {
    fetchSTARSWARS();
  }
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default connect(null, { fetchSTARSWARS })(Lista);

/*fetchSTARSWARS.propTypes = {
  fetchSTARSWARS: PropTypes.func.isRequired,
};*/
