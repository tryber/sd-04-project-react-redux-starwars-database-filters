import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../actions/filterByName';

export class FilterByName extends Component {
  render() {
    return (
      <input
        type="text"
        data-testeid="name-filter"
        onChange={(e) => this.props.filterByName(e.target.value)}

      />
    );
  }
}

export default FilterByName;
