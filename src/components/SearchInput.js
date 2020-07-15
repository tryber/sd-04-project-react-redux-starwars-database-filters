import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swSearch } from '../actions';

const SearchInput = ({ value, swSearched }) => (
  <input
    className="searchInput"
    data-testid="name-filter"
    placeholder="Search a Planet"
    value={value}
    onChange={(e) => swSearched(e.target.value)}
  />
);

const mapStateToProps = (state) => ({
  value: state.filters.value,
});

const mapDispatchToProps = (dispatch) => ({
  swSearched: (e) => dispatch(swSearch(e)),
});

SearchInput.propTypes = {
  swSearched: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
