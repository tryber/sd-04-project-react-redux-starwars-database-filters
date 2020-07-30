import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

class FilterNumValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getColumns() {
    const selectColumn = this.updateColumns();
    return (
      <select
        data-testid="column-filter"
        value={this.state.column}
        onChange={(event) => this.handleOnChange(event, 'column')}
      >
        {selectColumn.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  getComparison() {
    const comparison = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={this.state.comparison}
        onChange={(event) => this.handleOnChange(event, 'comparison')}
      >
        {comparison.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  handleOnChange(event, field) {
    this.setState({ [field]: event.target.value });
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

  handleOnClick() {
    const { column, comparison, number } = this.state;
    const { filteredByNumericValues } = this.props;
    filteredByNumericValues(column, comparison, number);
    this.setState({ column: '', comparison: '', number: '' });
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
          onChange={(event) => this.handleOnChange(event, 'number')}
        />
        <button
          data-testid="button-filter"
          onClick={this.handleOnClick}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

FilterNumValues.propTypes = {
  filteredByNumericValues: PropTypes.func.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filteredByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumValues);
