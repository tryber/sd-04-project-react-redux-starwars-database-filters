import { getPlanets } from '../services/planetsAPI';
import * as types from './actionTypes';

const requestPlanets = () => ({
  type: types.REQUEST_PLANETS,
});

const requestPlanetsSuccess = (planets) => ({
  type: types.REQUEST_PLANETS_SUCCESS,
  planets,
});

const requestPlanetsFailure = (error) => ({
  type: types.REQUEST_PLANETS_FAILURE,
  error,
});

export default function fetchPlanetsAPI() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets().then(
      (planets) => dispatch(requestPlanetsSuccess(planets.results)),
      (error) => dispatch(requestPlanetsFailure(error.message))
    );
  };
}
