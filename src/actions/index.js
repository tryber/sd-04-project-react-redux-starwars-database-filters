import apiPlanets from '../services';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const PLANETS_SUCCESS = 'PLANETS_SUCCESS';
export const PLANETS_FAILURE = 'PLANETS_FAILURE';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const successPlanets = (results) => ({
  type: PLANETS_SUCCESS,
  results,
});

const failurePlanets = (error) => ({
  type: PLANETS_FAILURE,
  error,
});

const getAPIData = (endpoint) => (dispatch) => {
  dispatch(requestPlanets());
  apiPlanets(endpoint)
    .then(data => dispatch(successPlanets(data)))
    .catch(error => dispatch(failurePlanets(error)));
};

export default getAPIData;
