import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { fBNV } = this.props;
    fBNV(column, comparison, number);
    this.setState({ column: '', comparison: '', number: '' });
  }

  getColumns() {
    const select = this.updateColumns();
    const { column } = this.state;
    return (
      <select
        data-testid="column-filter"
        value={column}
        onChange={(event) => this.onChange(event, 'column')}
      >
        {select.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  getComparison() {
    const { comparison } = this.state;
    const comparison2 = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        data-testid="comparison-filter"
        value={comparison}
        onChange={(event) => this.onChange(event, 'comparison')}
      >
        {comparison2.map((item) => (
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
        {this.getComparison()}
        <input
          data-testid="value-filter"
          type="number"
          value={number}
          onChange={(event) => this.onChange(event, 'number')}
        />
        <button data-testid="button-filter" type="submit" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

FilterValues.propTypes = {
  fBNV: PropTypes.func.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fBNV: (column, comparison, value) => dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterValues);
