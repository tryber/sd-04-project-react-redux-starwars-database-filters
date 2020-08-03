import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterTable } from '../action/actionFilter';

const FilterByName = ({ filter }) => (
  <div>
    <form htmlFor="name">
      <label htmlFor="name">Filter by name:</label>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(e) => filter(e.target.value)}
      />
    </form>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filter: (text) => dispatch(filterTable(text)),
});

FilterByName.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterByName);
