import fetchApi from '../utils/fetchAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const FAIL_REQUEST = 'FAIL_REQUEST';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (planets) => ({
  type: RECEIVE_PLANETS,
  planets,
});

const failPlanets = (error) => ({
  type: FAIL_REQUEST,
  error,
});

export function fetchPlanets() {
  return (dispach) => {
    dispach(requestPlanets());
    return fetchApi().then(
      (data) => dispach(receivePlanets(data.results)),
      (error) => dispach(failPlanets(error.message)),
    );
  };
}
