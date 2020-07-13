import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { search } from '../actions/filters';

const FilterSearch = ({ searchName }) => {
  return (
    <label htmlFor="search">
      Search
      <input
        type="text"
        name="search"
        id="search"
        data-testid="name-filter"
        onChange={(event) => searchName(event.target.value)}
      />
    </label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchName: (name) => dispatch(search(name)),
});

FilterSearch.propTypes = {
  searchName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterSearch);
