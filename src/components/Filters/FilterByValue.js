import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import { filterByNumericValues } from '../../actions';

class FilterValue extends Component {
  constructor(props) {
    super(props);
    this.state = { column: '', comparison: '', value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit() {
    const { column, comparison, value } = this.state;
    const { filterByValues } = this.props;
    filterByValues(column, comparison, value);
    this.setState({ column: '', comparison: '', value: '' });
  }

  filterColumn() {
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return columns;
  }

  renderColumns() {
    const options = this.filterColumn();
    return (
      <select
        data-testid="column-filter"
        value={this.state.column}
        onChange={(event) => this.handleChange(event, 'column')}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  renderComparison() {
    const comparison = ['', 'maior que', 'igual a', 'menor que'];
    return (
      <select
        data-testid="comparison-filter"
        value={this.state.comparison}
        onChange={(event) => this.handleChange(event, 'comparison')}
      >
        {comparison.map((item) => (
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
        {this.renderColumns()}
        {this.renderComparison()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.value}
          onChange={(event) => this.handleChange(event, 'value')}
        />
        <button type="button" data-testid="button-filter" onClick={this.handleSubmit}>
          filter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

FilterValue.propTypes = {
  filterByValue: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterValue);
