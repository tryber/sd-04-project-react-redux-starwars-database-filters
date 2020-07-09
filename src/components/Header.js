import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderStyle } from '../styles';
import { getAPI } from '../actions';

const Header = (props) => {
  const { getAPIProps } = props;
  return (
    <HeaderStyle>
      <h1>StarWars Datatable with Filters</h1>
      <button type="button" onClick={() => getAPIProps()}>
        FIND PLANETS!
      </button>
    </HeaderStyle>
  );
};

const mapDispatch = {
  getAPIProps: getAPI,
};

export default connect(null, mapDispatch)(Header);

Header.propTypes = {
  getAPIProps: PropTypes.func.isRequired,
};
