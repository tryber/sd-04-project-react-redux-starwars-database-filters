import React from 'react';
import { connect } from 'react-redux';
import { swFetch } from '../action'; // importando a função do fetch;

class Table extends React.Component {
  // ao carregar o componente, realizar a chamada do dispatch,
  // referente à função do fetch.
  componentDidMount() {
    const { swPlanets } = this.props;
    swPlanets();
  }

  render() {
    const { planets } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Film</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>
                  {planet.films.map((film) => (
                    <span key={film}>{film}</span>
                  ))}
                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Passo a chave planets como props para o componente.
// essa chave pega o estado presente no reducer.
const mapStateToProps = (state) => ({
  planets: state.swReducer.dataFiltered,
});

// realiza um dispatch para props com a função importada das actions,
// passando a chave criada como props do componente.
const mapDispatchToProps = (dispatch) => ({
  swPlanets: () => dispatch(swFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
