import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from '../actions/dataAction';
import { getPlanet } from '../services/api'
import { TableHead } from './TableHead';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    }
  }
  
  componentDidMount() {
      getPlanet().then((planets) => this.setState((state) => ({...state, planets})));
  }

  render() {
    const { planets } = this.state;
    return (
      <div>
        <table>
          <TableHead />
          <tbody>
          {planets.map((item) => (
            <tr>
              <td key={item.name}>{item.name}</td>
              <td key={item.population}>{item.population}</td>
              <td key={item.climate}>{item.climate}</td>
              <td key={item.diameter}>{item.diameter}</td>
              <td key={item.gravity}>{item.gravity}</td>
              <td key={item.orbital_period}>{item.orbital_period}</td>
              <td key={item.rotation_period}>{item.rotation_period}</td>
              <td key={item.surface_water}>{item.surface_water}</td>
              <td key={item.terrain}>{item.terrain}</td>
              <td key={item.films[0]}>{item.films}</td>
              <td key={item.url}>{item.url}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (value) => dispatch(fetchPlanet(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
