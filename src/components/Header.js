import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../actions';

export const Header = ({ onFilterByName }) => (
  <div>
    <input
      type="text"
      name="name-filter"
      placeholder="Search"
      onChange={(e) => onFilterByName(e.target.value)}
      data-testid="name-filter"
    />
  </div>
);

Header.propTypes = {
  onFilterByName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterByName: (name) => dispatch(updateFilter(name)),
});

export default connect(null, mapDispatchToProps)(Header);
