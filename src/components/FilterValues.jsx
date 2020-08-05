import React, { Component } from 'react';
import { filterByNumericValues } from '../actions';
import { connect } from 'react-redux';
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

  onClick() {
    const { column, comparation, number } = this.state;
    const { filterByNumericValues } = this.props;
    filterByNumericValues(column, comparation, number);
    this.setState({ column: '', comparation: '', number: '' });
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
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapState, mapDispatch)(FilterValues);
