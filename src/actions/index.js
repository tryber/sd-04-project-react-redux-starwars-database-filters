import getPlanetsData from '../service/SWAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_SWAPI_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAIL = 'REQUEST_PLANETS_FAIL';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const requestPlanetsFail = () => ({
  type: REQUEST_PLANETS_FAIL,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanetsData().then(
      (planets) => dispatch(requestPlanetsSuccess(planets.results)),
      (error) => dispatch(requestPlanetsFail(error)),
    );
  };
}
