import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo } from '../../actions/actionCreators';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      head: [
        'name',
        'climate',
        'diameter',
        'edited',
        'films',
        'gravity',
        'orbital_period',
        'population',
        'rotation_period',
        'surface_water',
        'terrain',
        'created',
        'url',
      ],
    };
  }

  filterPlanetsByName(query) {
    const { data } = this.props;
    if (query === '') return data;
    return data.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
  }

  filterPlanetsByNumericValues(planets) {
    const { filterNumericValues } = this.props;

    if (filterNumericValues.length === 0) return planets;
    return filterNumericValues.reduce((filteredPlanetsArray, filterNumericValue) => {
      const { column, comparison, value } = filterNumericValue;
      return filteredPlanetsArray.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(planet[column]) === Number(value);
          default:
            return false;
        }
      });
    }, planets);
  }

  sortPlanets(planets = [...this.props.data]) {
    if (planets.length === 0) return planets;
    const { orderColumn, orderSort } = this.props;
    const planetKey = orderColumn.toLowerCase();

    if (isNaN(planets[0][planetKey])) {
      planets.sort((a, b) => (a[planetKey] > b[planetKey] ? 1 : -1));
    } else {
      planets.sort((a, b) => a[planetKey] - b[planetKey]);
    }
    if (orderSort === 'DESC') planets.reverse();
    return planets;
  }

  tableHeadRender() {
    const { head } = this.state;
    return (
      <thead>
        <tr>
          {head.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
    );
  }


  tableBodyRender() {
    const { head } = this.state;
    const { query } = this.props;

    const filteredByNamePlanets = this.filterPlanetsByName(query);
    const filteredPlanets = this.filterPlanetsByNumericValues(filteredByNamePlanets);
    const filteredSortedPlanets = this.sortPlanets(filteredPlanets);

    return (
      <tbody>
        {filteredSortedPlanets
          .map((planet) => (
            <tr key={planet.name}>
              {head.map((th) => (
                <td key={`${planet.name} ${th}`}>{planet[th]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    );
  }

  render() {
    const { loading, data } = this.props;
    if (loading || !data) return <div>loading...</div>;
    return (
      <table className="table">
        {this.tableHeadRender()}
        {this.tableBodyRender()}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.swapiReducer.data,
  loading: state.swapiReducer.loading,
  query: state.filters.filterByName.name,
  filterNumericValues: state.filters.filterByNumericValues,
  orderColumn: state.filters.order.column,
  orderSort: state.filters.order.sort,
});

export default connect(mapStateToProps, { fetchingPlanetsInfo })(Table);

Table.defaultProps = {
  query: '',
};

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
    }),
  ).isRequired,
  query: PropTypes.string,
  filterNumericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  orderColumn: PropTypes.string.isRequired,
  orderSort: PropTypes.string.isRequired,
};
