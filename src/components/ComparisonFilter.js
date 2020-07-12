import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByNumericValues } from '../actions';

// Gambiarra pro CC
const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const options2 = ['maior que', 'menor que', 'igual a'];

class ComparisonFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  filter() {
    const { column, comparison, number } = this.state;
    const { filteringByNumericValues } = this.props;
    filteringByNumericValues(column, comparison, number);
  }

  render() {
    const { column, comparison, number } = this.state;
    return (
      <div>
        <select
          value={column}
          data-testid="column-filter"
          onChange={(event) => this.handleChange(event, 'column')}
        >
          <option value="">selecionar</option>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <select
          value={comparison}
          data-testid="comparison-filter"
          onChange={(event) => this.handleChange(event, 'comparison')}
        >
          <option value="">selecionar</option>
          {options2.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <input
          value={number}
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.handleChange(event, 'number')}
        />
        <button data-testid="button-filter" onClick={() => this.filter()}>Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filteringByNumericValues: (column, comparison, number) =>
    dispatch(filterByNumericValues(column, comparison, number)),
});

export default connect(null, mapDispatchToProps)(ComparisonFilter);

ComparisonFilter.propTypes = {
  filteringByNumericValues: PropTypes.func.isRequired,
};
