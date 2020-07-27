import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderFilter } from '../actions/filters';

const OrderFilter = ({ orderFilterProps }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const column = e.target.columnName.value;
      const sort = e.target.orderRatio.value;
      if (column) orderFilterProps({ column, sort });
    }}

  >
    <select name="columnName" data-testid="column-sort">
      <option name="column" value="">Column</option>
      <option name="column" value="name">name</option>
      <option name="column" value="rotation_period">rotation_period</option>
      <option name="column" value="obital_period">obital_period</option>
      <option name="column" value="diameter">diameter</option>
      <option name="column" value="gravity">gravity</option>
      <option name="column" value="terrain">terrain</option>
      <option name="column" value="population">population</option>
      <option name="column" value="created">created</option>
      <option name="column" value="edited">edited</option>
    </select>
    <label htmlFor="ASC">
      <input
        name="orderRatio"
        checked
        id="ASC"
        type="radio"
        data-testid="column-sort-input"
        value="ASC"
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
      />
    DESC
    </label>
    <button type="submit" data-testid="column-sort-button">Filtrar</button>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  orderFilterProps: (e) => dispatch(orderFilter(e)),
});

export default connect(null, mapDispatchToProps)(OrderFilter);

OrderFilter.propTypes = {
  orderFilterProps: PropTypes.func.isRequired,
};
