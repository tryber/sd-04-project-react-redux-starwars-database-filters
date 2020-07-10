import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.css';
import { getAPI, filterByName } from '../actions';

const Header = (props) => {
  const { getAPIProps, filterValue } = props;
  return (
    <header>
      <input
        data-testid="name-filter"
        onChange={(e) => filterValue(e.target.value)}
      />
      <h1>StarWars Datatable with Filters</h1>
      <button type="button" onClick={() => getAPIProps()}>
        FIND PLANETS!
      </button>
    </header>
  );
};

const mapDispatch = {
  getAPIProps: getAPI,
  filterValue: filterByName,
};

export default connect(null, mapDispatch)(Header);

Header.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
  filterValue: PropTypes.func.isRequired,
};
