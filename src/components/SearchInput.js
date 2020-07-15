import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swSearch } from '../actions';

const SearchInput = ({ value, swSearch }) => (
  <input
    className="searchInput"
    data-testid="name-filter"
    placeholder="Search a Planet"
    value={value}
    onChange={(e) => swSearch(e.target.value)}
  />
);

const mapStateToProps = (state) => ({
  value: state.filters.value,
});

const mapDispatchToProps = (dispatch) => ({
  swSearch: (e) => dispatch(swSearch(e)),
});

SearchInput.propTypes = {
  swSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
