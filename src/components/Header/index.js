import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateFilterByName } from '../../actions';
import NumericFilter from './NumericFilter';
import FiltersList from './FiltersList';
import OrderFilter from './OrderFilter';

export const Header = ({ onFilterByName }) => (
  <div>
    <input
      type="text"
      name="name-filter"
      placeholder="Pesquisar"
      onChange={(e) => onFilterByName(e.target.value)}
      data-testid="name-filter"
    />
    <NumericFilter />
    <OrderFilter />
    <FiltersList />
  </div>
);

Header.propTypes = {
  onFilterByName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterByName: (name) => dispatch(updateFilterByName(name)),
});

export default connect(null, mapDispatchToProps)(Header);
