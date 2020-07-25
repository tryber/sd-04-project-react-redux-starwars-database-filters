import getPlanet from '../services/api';

export const GET_DATA = 'GET_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';

export function getData(planets) {
  return {
    type: GET_DATA,
    isFetching: true,
    planets,
  };
}

export function requestData() {
  return {
    type: REQUEST_DATA,
    isFetching: false,
  };
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
