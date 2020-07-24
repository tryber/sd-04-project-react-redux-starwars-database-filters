import { getPlanet } from "../services/api";

export const GET_DATA = 'GET_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';

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

export function fetchPlanet() {
  return(dispatch) => {
    dispatch(requestData());
    return getPlanet()
    .then(
      (json) => dispatch(getData(json)),
    );
  }
}
