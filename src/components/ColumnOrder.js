import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortColumns } from '../actions';

class ColumnOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }

  ascDesc() {
    return (
      <div>
        <label htmlFor="orderASC">
          ASC
          <input
            data-testid="column-sort-input"
            id="orderASC"
            name="order"
            type="radio"
            value="ASC"
            onChange={(event) => this.setState({ sort: event.target.value })}
          />
        </label>
        <label htmlFor="orderDESC">
          DESC
          <input
            data-testid="column-sort-input"
            id="orderDESC"
            name="order"
            type="radio"
            value="DESC"
            onChange={(event) => this.setState({ sort: event.target.value })}
          />
        </label>
      </div>
    );
  }

  render() {
    const { column, sort } = this.state;
    const { data, orderColumns } = this.props;
    const keys = data.length >= 1 ? Object.keys(data[0]) : [];
    const tableHeader = keys.filter((key) => key !== 'residents');
    return (
      <div>
        {/* Seleciona Coluna */}
        <select
          data-testid="column-sort"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          {tableHeader.map((columns) => (
            <option key={columns} value={columns.toLowerCase()}>
              {columns}
            </option>
          ))}
        </select>
        {/* ASC e DESC */}
        {this.ascDesc()}
        {/* Botão Filtrar */}
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => orderColumns(column, sort)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

ColumnOrder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderColumns: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.planets.data,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

const mapDispatchToProps = (dispatch) => ({
  orderColumns: (column, sort) => dispatch(sortColumns(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOrder);
