import fetchSWAPI from '../service/apiSWAPI';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (data) => ({
  type: REQUEST_API_SUCCESS,
  data,
});

export const getData = (endpoint) => (dispatch) => {
  dispatch(requestApi());
  return fetchSWAPI(endpoint).then((data) => dispatch(requestApiSuccess(data)));
};
