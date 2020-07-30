import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByNumericValues from '../actions';

class FilterNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.onClick = this.onClick.bind(this);
  }

  updateColumns() {
    const columns = [
      '',
      'population',
      'orbital_period',
      'diamenter',
      'rotation_period',
      'surface_water',
    ];
    return columns;
  }

  onChange(e, field) {
    this.setState({ [field]: e.target.value });
  }

  getColumns() {
    const select = this.updateColumns();
    return (
      <select
        value={this.state.column}
        onChange={(e) => this.onChange(e, 'column')}
      >
        {select.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    );
  }

  getComparison() {
    const comparison = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        value={this.state.comparison}
        onChange={(e) => this.onChange(e, 'comparison')}
      >
        {comparison.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    );
  }

  onClick() {
    const { column, comparison, value } = this.state;
    const { filterByNumericValues } = this.props;
    filterByNumericValues(column, comparison, value);
    this.setState({ column: '', comparison: '', value: '' });
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getComparison()}
        <input
          type="number"
          value={this.state.value}
          onChange={(e) => this.onChange(e, 'value')}
        ></input>
        <button onClick={this.onClick}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValue: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
