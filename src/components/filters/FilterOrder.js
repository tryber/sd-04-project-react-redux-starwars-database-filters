import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderColumns } from '../../action';

class FilterOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnSort: 'Name',
      inputSort: 'ASC',
    };

    this.onOrderChange = this.onOrderChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getComparation = this.getComparation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onOrderChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  onClick() {
    const { number, column, comparation } = this.state;
    this.props.filterByNumericValues(column, comparation, number);
    this.setState({ number: '', column: '', comparation: '' });
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
        onChange={(event) => this.onOrderChange(event, 'columnSort')}
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

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={this.state.comparation}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.number}
          onChange={(event) => this.onNumberChange(event)}
        />
        <button data-testid="button-filter" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  orderFunc: (column, sort) => dispatch(orderColumns(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterOrder);

FilterOrder.propTypes = {
  orderFunc: PropTypes.func.isRequired,
};
