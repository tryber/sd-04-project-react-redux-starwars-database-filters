import apiPlanets from '../services/index';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const sucessPlanets = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const failurePlanets = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return apiPlanets().then((json) => dispatch(sucessPlanets(json.results)),
    (error) => dispatch(failurePlanets(error)),
    );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});
