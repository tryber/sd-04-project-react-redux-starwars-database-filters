import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderColumn } from '../../actions';

const columns = [
  'name',
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital_period',
  'population',
  'rotation_period',
  'surface_water',
  'terrain',
  'url',
];

const Order = (props) => {
  const [column, setColumn] = React.useState('name');
  const [sort, setSort] = React.useState('ASC');

  const renderColumnOptions = () => (
    <select data-testid="column-sort" onChange={(e) => setColumn(e.target.value)}>
      {columns.map((col) => (
        <option key={col}>{col}</option>
      ))}
    </select>
  );

  const renderSortInputs = () => (
    <div>
      <input
        data-testid="column-sort-input"
        type="radio"
        name="order"
        value="ASC"
        id="ASC"
        onClick={(e) => setSort(e.target.value)}
      />
      <label htmlFor="ASC">ASC</label>
      <input
        data-testid="column-sort-input"
        type="radio"
        name="order"
        value="DESC"
        id="DESC"
        onClick={(e) => setSort(e.target.value)}
      />
      <label htmlFor="DESC">DESC</label>
    </div>
  );

  return (
    <div className="order">
      {renderColumnOptions()}
      {renderSortInputs()}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={() => props.orderColumn(column, sort)}
      >
        order
      </button>
    </div>
  );
};

export default connect(null, { orderColumn })(Order);

Order.propTypes = {
  orderColumn: PropTypes.func.isRequired,
};
