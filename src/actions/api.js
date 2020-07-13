import fetchSWAPI from '../service/apiSWAPI';
import { REQUEST_API, REQUEST_API_SUCCESS } from './actionTypes';


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
