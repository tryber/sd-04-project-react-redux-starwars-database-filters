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

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = { column: 'name', sort: 'ASC' };
  }

  renderSortInputs() {
    return (
      <div>
        <input
          data-testid="column-sort-input"
          type="radio"
          name="order"
          value="ASC"
          id="ASC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          type="radio"
          name="order"
          value="DESC"
          id="DESC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    const { column, sort } = this.state;
    return (
      <div className="order">
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {columns.map((col) => (
            <option key={col}>{col}</option>
          ))}
        </select>
        {this.renderSortInputs()}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => this.props.orderColumn(column, sort)}
        >
          order
        </button>
      </div>
    );
  }
}

export default connect(null, { orderColumn })(Order);

Order.propTypes = {
  orderColumn: PropTypes.func.isRequired,
};
