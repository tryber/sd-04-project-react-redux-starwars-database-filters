import getPlanets from '../service/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

const requestPlanets = () => ({ type: REQUEST_PLANETS });

const receivePlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

// Action Assincrono Creator Retorna uma Funcao Com o Thunk
export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets().then((planets) => dispatch(receivePlanetsSuccess(planets.results)));
  };
}
