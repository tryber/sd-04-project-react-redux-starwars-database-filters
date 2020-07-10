import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSTARSWARS } from '../action/index'
import PropTypes from 'prop-types';

export class Lista extends Component {
  componentDidMount() {
    this.props.fetchSTARSWARS();
  }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

export default connect(null, { fetchSTARSWARS })(Lista)

fetchSTARSWARS.propTypes = {
  fetchSTARSWARS: PropTypes.func.isRequired,
};
