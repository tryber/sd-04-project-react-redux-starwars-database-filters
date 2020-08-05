import getPlanetsAPI from '../services/pegaPlanets';

export const PEDIR_PLANETS = 'PEDIR_PLANETS';
export const PEDIR_PLANETS_CONCLUIDO = 'PEDIR_PLANETS_CONCLUIDO';

const pedirPlanets = () => ({
  type: PEDIR_PLANETS,
});

const pedirPlanetsConcluido = ({ results }) => ({
  type: PEDIR_PLANETS_CONCLUIDO,
  results,
});

export function fetchApiPlanets() {
  return (dispatch) => {
    dispatch(pedirPlanets());
    return getPlanetsAPI().then((data) => dispatch(pedirPlanetsConcluido(data)));
  };
}
