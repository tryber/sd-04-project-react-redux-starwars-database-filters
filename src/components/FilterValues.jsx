import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../actions';
import ListFilters from '../components/ListFilters';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparation: '',
      number: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  updatesColumns() {
    const { numericValues } = this.props;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    // se encontrar no store, não mostra
    const invisibleColumns = numericValues.map(({ column }) => column);
    return columns.filter((item) => !invisibleColumns.includes(item));
  }

  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onClick() {
    const { column, comparation, number } = this.state;
    const { filterByNumericValue } = this.props;
    filterByNumericValue(column, comparation, number);
    this.setState({ column: '', comparation: '', number: '' });
  }

  getColums() {
    const select = this.updatesColumns();
    return (
      <select
        data-testid="column-filter"
        value={this.state.column}
        name="column"
        onChange={(e) => this.onChange(e)}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={this.state.comparation}
        name="comparation"
        onChange={(e) => this.onChange(e)}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.getColums()}
        {this.getComparation()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.number}
          name="number"
          onChange={(event) => this.onChange(event)}
        />
        <button data-testid="button-filter" onClick={this.onClick}>
          Filtrar
        </button>
        <ListFilters />
      </div>
    );
  }
}

const mapState = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  filterByNumericValue: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapState, mapDispatch)(FilterValues);

FilterValues.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
