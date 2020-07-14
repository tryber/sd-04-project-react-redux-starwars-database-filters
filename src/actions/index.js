import planetsAPI from '../services/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCESS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});


export function fetchPlanets() {
  return async (dispatch) => {
    dispatch(requestPlanets());

    const planets = await planetsAPI();
    return dispatch(requestPlanetsSuccess(planets.results));
  };
}
