import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderColumns } from '../actions';

class FilterOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnSort: 'Name',
      inputSort: 'ASC',
    };
  }

  onOrderChange(e, key) {
    const { value } = e.target;
    this.setState({ [key]: value });
  }

  onClick() {
    const { columnSort, inputSort } = this.state;
    this.props.orderFunc(columnSort, inputSort);
  }

  getColumns() {
    const columns = [
      'Name',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <select
        onChange={(e) => this.onOrderChange(e, 'columnSort')}
        data-testid="column-sort"
        value={this.state.columnSort}
      >
        {columns.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  getRadios() {
    return (
      <div>
        <input
          defaultChecked
          data-testis="column-sort-input"
          type="radio"
          id="ASC"
          name="order"
          value="ASC"
          onChange={(e) => this.onOrderChange(e, 'inputSort')}
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          type="radio"
          id="DESC"
          name="order"
          value="DESC"
          onChange={(e) => this.onOrderChange(e, 'inputSort')}
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getRadios()}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={(e) => this.onClick(e)}
        >
          Ordenar
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  orderFunc: (column, sort) => dispatch(orderColumns(column, sort)),
});

FilterOrder.propTypes = {
  orderFunc: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(FilterOrder);
