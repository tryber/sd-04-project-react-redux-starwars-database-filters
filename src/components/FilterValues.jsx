import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterByNumericValues } from '../actions';

class filterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };

    this.onClick = this.onClick.bind(this);
  }

  onChange(event, campo) {
    this.setState({ [campo]: event.target.value });
  }

  onClick() {
    const { filterByNumeric } = this.props;
    const { column, comparison, number } = this.state;
    filterByNumeric(column, comparison, number);
    this.setState({ column: '', comparison: '', number: '' });
    console.log(column);
  }

  getColumns() {
    const selection = this.columnSelectorUpdate();
    return (
      <select data-testid="column-filter" onChange={(e) => this.onChange(e, 'column')}>
        {selection.map((coluna) => (
          <option key={coluna} value={coluna}>
            {coluna}
          </option>
        ))}
      </select>
    );
  }

  getComparison() {
    const compare = ['', 'maior que', 'menor que', 'igual a'];

    return (
      <select
        data-testid="comparison-filter"
        value={this.state.comparison}
        onChange={(e) => this.onChange(e, 'comparison')}
      >
        {compare.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    );
  }

  columnSelectorUpdate() {
    const { numericValues } = this.props;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const updatedColumns = numericValues.map(({ column }) => column);
    return columns.filter((filtrado) => !updatedColumns.includes(filtrado));
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getComparison()}
        <input
          data-testid="value-filter"
          type="number"
          value={this.state.number}
          onChange={(e) => this.onChange(e, 'number')}
        />
        <button data-testid="button-filter" onClick={() => this.onClick()}>
          Filter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumeric: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(filterValues);
