import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

class FilterValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  onClick() {
    const { column, comparison, number } = this.state;
    const { filterByNumericValuess } = this.props;
    filterByNumericValuess(column, comparison, number);
    this.setState({ column: '', comparison: '', number: '' });
  }

  getCoparation() {
    const comparison = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select data-testid="comparison-filter" value={this.state.comparison} onChange={(event) => this.onChange(event, 'comparison')}>
        {comparison.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
  }

  getColumns() {
    const select = this.updateColums();
    return (
      <select data-testid="column-filter" value={this.state.column} onChange={(event) => this.onChange(event, 'column')}>
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  updateColums() {
    const { numericValues } = this.props;
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const chooseColumns = numericValues.map(({ column }) => column);
    return columns.filter((el) => !chooseColumns.includes(el));
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getCoparation()}
        <input
          type="number"
          value={this.state.number}
          data-testid="value-filter"
          onChange={(event) => this.onChange(event, 'number')}
        />
        <button onClick={this.onClick} data-testid="button-filter">
          Filtrar
        </button>
      </div>
    );
  }
}
FilterValues.propTypes = {
  filterByNumericValuess: PropTypes.func.isRequired,
  numericValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  filterByNumericValuess: (column, comparison, value) => {
    dispatch(filterByNumericValues(column, comparison, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterValues);
