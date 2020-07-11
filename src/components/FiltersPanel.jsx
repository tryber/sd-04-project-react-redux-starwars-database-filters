import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../actions/searchFilter';

const FiltersPanel = ({ searchName }) => (
  <div>
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
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  searchName: (name) => dispatch(search(name)),
});

FiltersPanel.propTypes = {
  searchName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FiltersPanel);
