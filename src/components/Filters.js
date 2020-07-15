import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncActionDataFetch, actionNameFilter, actionNumericFilter } from '../actions';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.storeFilters = this.storeFilters.bind(this);
    this.state = {
      columnValues: ['coluna', 'population', 'orbital_period', 'diameter',
        'rotation_period', 'surface_water'],
    };
  }

  componentDidMount() {
    const { dataFetch } = this.props;
    dataFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  }

  returnColumns(delColumn) {
    this.setState((state) => ({
      columnValues: state.columnValues.filter((column) => column !== delColumn),
    }));
  }

  storeFilters(numericFilter) {
    const elColumn = document.getElementById('column-filter');
    const column = elColumn.options[elColumn.selectedIndex].value;
    const elComparison = document.getElementById('comparison-filter');
    const comparison = elComparison.options[elComparison.selectedIndex].value;
    const value = document.getElementById('value-filter').value;
    this.returnColumns(column);
    return numericFilter({ column, comparison, value });
  }

  render() {
    const { nameFilter, numericFilter, filters } = this.props;
    const comparisonValues = ['comparação', 'maior que', 'menor que', 'igual a'];
    return (
      <div>
        <label htmlFor="planet-filter">Procurar </label>
        <input
          type="text" id="planet-filter" data-testid="name-filter"
          onChange={(e) => nameFilter(e.target.value)}
        />
        <select
          id="column-filter" data-testid="column-filter"
          defaultValue={this.state.columnValues[0]}
        >
          {this.state.columnValues.map((column) => (<option key={column}>{column}</option>))}
        </select>
        <select
          id="comparison-filter" data-testid="comparison-filter" defaultValue={comparisonValues[0]}
        >
          {comparisonValues.map((comparison) => (<option key={comparison}>{comparison}</option>))}
        </select>
        <input id="value-filter" type="number" data-testid="value-filter" />
        <button
          data-testid="button-filter" onClick={() => this.storeFilters(numericFilter)}
        >
          Filtrar
        </button>
        {filters.map((filter) =>
          <p key={filter.column} data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>,
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  dataFetch: (url) => dispatch(asyncActionDataFetch(url)),
  nameFilter: (text) => dispatch(actionNameFilter(text)),
  numericFilter: (oNumericFilter) => dispatch(actionNumericFilter(oNumericFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  dataFetch: PropTypes.func.isRequired,
  nameFilter: PropTypes.func.isRequired,
  numericFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
