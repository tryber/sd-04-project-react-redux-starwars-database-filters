import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchPlanets } from '../actions/ApiRequest';
import { applyFilters } from '../actions/filters';
import HeaderTable from './HeaderTable';

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
      planets, isFetching, filters, filteredPlanets,
    } = this.props;
    console.log(!filters);
    const dataPlanets = !filters ? Object.values(planets) : filteredPlanets;
    console.log(filteredPlanets);
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
  filters: state.filterPlanets.filters,
});

const mapDispatchToProps = (dispatch) => ({
  planetsAPI: () => dispatch(fetchPlanets()),
  applyFilters,
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  planetsAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
