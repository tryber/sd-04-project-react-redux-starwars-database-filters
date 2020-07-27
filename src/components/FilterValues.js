import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

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

  onChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  onClick() {
    const { column, comparation, number } = this.state;
    const { onFilterByNumericValues } = this.props;
    onFilterByNumericValues(column, comparation, number);
    this.setState({ column: '', comparation: '', number: '' });
  }

  getColumns() {
    const select = this.updateColumns();
    const { column } = this.state;
    return (
      <select value={column} onChange={(event) => this.onChange(event, 'column')}>
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
    const { comparation: comp } = this.state;
    return (
      <select
        value={comp}
        onChange={(event) => this.onChange(event, 'comparation')}
      >
        {comparation.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
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
    return columns.filter((item) => !chosenColumns.includes(item));
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          value={number}
          onChange={(event) => this.onChange(event, 'number')}
        />
        <button type="button" onClick={this.onClick}>Filtrar</button>
      </div>
    );
  }
}

FilterValues.propTypes = {
  onFilterByNumericValues: PropTypes.func.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapState = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  onFilterByNumericValues:
    (column, comparison, value) => dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapState, mapDispatch)(FilterValues);
