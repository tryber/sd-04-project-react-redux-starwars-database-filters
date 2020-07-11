export const GET_DATA = 'GET_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getData(json) {
  return {
    type: GET_DATA,
    payload: json.message 
  }
}

export function requestData() {
  return {
    type: REQUEST_DATA 
  }
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error
  }
}

export function fetchPlanet() {
  return(dispatch) => {
    dispatch(requestData());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets')
    .then((res) => res.json()
    .then(
      (json) => dispatch(getData(json)),
      (error) => dispatch(failedRequest(error)),
    ));
  }
}
