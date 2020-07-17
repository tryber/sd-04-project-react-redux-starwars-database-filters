import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterTable } from '../action/actionFilter';

const FilterTable = ({ filter }) => (
  <div>
    <label>Filter by name:</label>
    <input
      data-testid="name-filter"
      type="text"
      onChange={(e) => filter(e.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filter: (text) => dispatch(filterTable(text)),
});

FilterTable.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterTable);
