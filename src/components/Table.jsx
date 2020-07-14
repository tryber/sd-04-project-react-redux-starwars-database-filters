import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchPlanets } from '../actions';

function planetsTable(planets) {
  return (
    <table className="table">
      {planets.map((planet) => (
        <tr className="table-column" key={planet.name}>
          <td className="table-cell">{planet.climate}</td>
          <td className="table-cell">{planet.diameter}</td>
          <td className="table-cell">{planet.gravity}</td>
          <td className="table-cell">{planet.name}</td>
          <td className="table-cell">{planet.orbital_period}</td>
          <td className="table-cell">{planet.population}</td>
          <td className="table-cell">-</td>
          <td className="table-cell">{planet.rotation_period}</td>
          <td className="table-cell">{planet.surface_water}</td>
          <td className="table-cell">{planet.terrain}</td>
          <td className="table-cell-url">{planet.url}</td>
        </tr>
      ))}
    </table>
  );
}


class Table extends Component {
  componentDidMount() {
    const { planetsAPI: fetch } = this.props;
    fetch();
  }

  render() {
    const { planets, isFetching } = this.props;
    const dataPlanets = planets ? Object.values(planets) : [];
    console.log(planets);
    if (isFetching && !planets) { return (<div>Loading...</div>); }
    return (
      <div>
        { planetsTable(dataPlanets) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.planets,
  isFetching: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  planetsAPI: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  planets: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  planetsAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
