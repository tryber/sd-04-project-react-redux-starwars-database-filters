import getPlanets from '../services/planetsAPI';
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

export const fetchPlanetsAPI = () =>
  (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets().then(
      (planets) => dispatch(requestPlanetsSuccess(planets.results)),
      (error) => dispatch(requestPlanetsFailure(error.message)),
    );
  };


export const filterByName = (event) => ({
  type: types.FILTER_BY_NAME,
  event,
});
