import getPlanet from '../services/api';

export const GET_DATA = 'GET_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';

function getData(planets) {
  return {
    type: GET_DATA,
    isFetching: true,
    planets,
  };
}

function requestData() {
  return {
    type: REQUEST_DATA,
    isFetching: false,
  };
}

export function filterByName(name) {
  return {
    type: FILTER_BY_NAME,
    name,
  };
}

export function filterByNumericValues(column, comparison, value) {
  return {
    type: FILTER_BY_NUMERIC_VALUE,
    column,
    comparison,
    value,
  }
}

export function fetchPlanet() {
  return (dispatch) => {
    dispatch(requestData());
    return getPlanet()
    .then(
      (planets) => dispatch(getData({ planets: planets.results })),
    );
  };
}
