import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { search } from '../actions/filters';

const FilterSearch = ({ searchName }) => (
  <div className="filter-search-container">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search by name"
      data-testid="name-filter"
      className="filter-search-input"
      onChange={(event) => searchName(event.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  searchName: (name) => dispatch(search(name)),
});

FilterSearch.propTypes = {
  searchName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterSearch);
