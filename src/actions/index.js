import apiSw from '../service/ApiRequest';

export const REQUEST_API = 'REQUEST_API';
export const GET_API = 'GET_API';

function getApi(data) {
  return { type: GET_API, data };
}

function requestApi() {
  return { type: REQUEST_API };
}

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return apiSw().then((data) => dispatch(getApi(data)));
  };
}
