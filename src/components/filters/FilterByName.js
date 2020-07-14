import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByText } from '../../actions/actionCreators';

export class FilterByName extends Component {
  render() {
    return (
      <input
        type="text"
        data-testeid="name-filter"
        onChange={(e) => this.props.filterByText(e.target.value)}

      />
    );
  }
}

export default connect(null, { filterByText })(FilterByName);

FilterByName.propTypes = {
  filterByText: PropTypes.func.isRequired,
};
