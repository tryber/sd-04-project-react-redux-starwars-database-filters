import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderFilter } from '../actions/filters';

const OrderFilter = ({ orderFilterProps }) => {
  let column;
  let sort;
  const handleColumn = (e) => { column = e.target.value; };
  const handleSort = (e) => { sort = e.target.value; };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (column && sort) orderFilterProps({ column, sort });
      }}
    >
      <select onChange={(e) => handleColumn(e, column)} name="columnName" data-testid="column-sort">
        <option value="">Column</option>
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">obital_period</option>
        <option value="diameter">diameter</option>
        <option value="climate">climate</option>
        <option value="gravity">gravity</option>
        <option value="terrain">terrain</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
        <option value="created">created</option>
        <option value="edited">edited</option>
      </select>
      <label htmlFor="ASC">
        <input
          name="orderRatio"
          id="ASC"
          type="radio"
          data-testid="column-sort-input"
          value="ASC"
          onChange={(e) => handleSort(e)}
        />
    ASC
      </label>
      <label htmlFor="DESC">
        <input
          name="orderRatio"
          id="DESC"
          type="radio"
          data-testid="column-sort-input"
          value="DESC"
          onChange={(e) => handleSort(e)}
        />
    DESC
      </label>
      <button type="submit" data-testid="column-sort-button">Filtrar</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  orderFilterProps: (e) => dispatch(orderFilter(e)),
});

export default connect(null, mapDispatchToProps)(OrderFilter);

OrderFilter.propTypes = {
  orderFilterProps: PropTypes.func.isRequired,
};
