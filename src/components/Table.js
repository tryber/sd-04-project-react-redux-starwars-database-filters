import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from '../actions/dataAction';
import TableHead from './TableHead';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { planets, isFetching } = this.props;
    if (!isFetching) {
      return <div>Loading</div>
    }
    return (
      <div>
        <table>
          <TableHead />
          <tbody>
            {planets.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.population}</td>
                <td>{item.climate}</td>
                <td>{item.diameter}</td>
                <td>{item.gravity}</td>
                <td>{item.orbital_period}</td>
                <td>{item.rotation_period}</td>
                <td>{item.surface_water}</td>
                <td>{item.terrain}</td>
                <td>{item.films}</td>
                <td>{item.edited}</td>
                <td>{item.created}</td>
                <td>{item.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  planets: state.planetReducer.planets.planets,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
