import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchPlanets } from '../actions/ApiRequest';
import { applyFilters } from '../actions/filters';
import HeaderTable from './HeaderTable';
import numericFilter from '../helpers/numericFilter';


function planetsTable(planets) {
  return (
    <table className="table">
      <HeaderTable />
      <tbody>
        {planets.map((planet) => (
          <tr className="table-column" key={planet.name}>
            <td className="table-cell">{planet.name}</td>
            <td className="table-cell">{planet.rotation_period}</td>
            <td className="table-cell">{planet.orbital_period}</td>
            <td className="table-cell">{planet.diameter}</td>
            <td className="table-cell">{planet.climate}</td>
            <td className="table-cell">{planet.gravity}</td>
            <td className="table-cell">{planet.terrain}</td>
            <td className="table-cell">{planet.surface_water}</td>
            <td className="table-cell">{planet.population}</td>
            <td className="table-cell">Residents</td>
            <td className="table-cell">Films</td>
            <td className="table-cell">{planet.created}</td>
            <td className="table-cell">{planet.edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class Table extends Component {
  componentDidMount() {
    const { planetsAPI: fetch } = this.props;
    fetch();
  }

  render() {
    const {
      planets, isFetching, nameFilter, numberFilter,
    } = this.props;
    const namePlanets = planets.filter(
      ({ name }) => (name.toLowerCase()).includes(nameFilter.name.toLowerCase()),
    );
    const dataPlanets = numericFilter(namePlanets, numberFilter);
    if (isFetching && !planets) { return (<div>Loading...</div>); }
    return (
      <div>
        {planetsTable(dataPlanets)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.planets,
  isFetching: state.getPlanets.isFetching,
  filteredPlanets: state.getPlanets.filteredPlanets,
  nameFilter: state.filters.filterByName,
  numberFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  planetsAPI: () => dispatch(fetchPlanets()),
  applyFilters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.defaultProps = {
  nameFilter: { name: '' },
};
Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  numberFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  planetsAPI: PropTypes.func.isRequired,
  nameFilter: PropTypes.shape(PropTypes.string),
};
