import getPlanets from '../service/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';

const requestPlanets = () => ({ type: REQUEST_PLANETS });
const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

export function fetchPlanets() {
  return async (dispatch) => {
    dispatch(requestPlanets());

    const planets = await getPlanets();
    return dispatch(requestPlanetsSuccess(planets.results));
  };
}
