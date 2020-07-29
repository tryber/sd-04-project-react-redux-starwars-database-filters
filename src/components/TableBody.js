import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';

class TableBody extends Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
  }

  render() {
    const { planets } = this.props;
    console.log(planets);
    return (
      <tbody>
        {planets.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
