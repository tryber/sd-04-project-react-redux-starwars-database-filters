import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByNumericValues } from '../actions';

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
          name="column"
          onChange={(event) => this.handleChange(event, 'column')}
          data-testid="column-filter"
        >
          <option value="">selecionar</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          value={comparison}
          name="comparison"
          onChange={(event) => this.handleChange(event, 'comparison')}
          data-testid="comparison-filter"
        >
          <option value="">selecionar</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          value={number}
          name="number"
          onChange={(event) => this.handleChange(event, 'number')}
          type="number"
          data-testid="value-filter"
        />
        <button data-testid="button-filter" onClick={() => this.filter()}>
          Filtrar
        </button>
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
