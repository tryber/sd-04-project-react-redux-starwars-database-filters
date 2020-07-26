import React, { Component } from 'react';
import { filterByNumericValues } from '../actions';
import { connect } from 'react-redux';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparation: '',
      number: '',
    }

    this.onClick = this.onClick.bind(this);
  }

  updateColumns() {
    const { numericValues } = this.props;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const chosenColumns = numericValues.map(({ column }) => column);
    return columns.filter(item => !chosenColumns.includes(item));
  }

  onChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  getColumns() {
    const select = this.updateColumns();
    return (
      <select
        value={this.state.column}
        onChange={(event) => this.onChange(event, 'column')}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    )
  }

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        value={this.state.comparation}
        onChange={(event) => this.onChange(event, 'comparation')}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    )
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
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          value={this.state.number}
          onChange={(event) => this.onChange(event, 'number')}
        />
        <button onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    )
  }
}

const mapState = (state) => ({
  numericValues: state.filters.filterByNumericValues,
})

const mapDispatch = (dispatch) => ({
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value))
})

export default connect(mapState, mapDispatch)(FilterValues);
