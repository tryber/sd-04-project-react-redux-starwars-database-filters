import fetchSWAPI from '../services/fetchSWAPI';

export const REQUEST = 'REQUEST';
export const requestSWAPI = () => ({
  type: REQUEST,
});

export const RECEIVED_DATA = 'RECEIVED_DATA';
export const receivedData = (data) => ({ type: RECEIVED_DATA, data });

export const getSWAPI = (endpoint) => (dispatch) => {
  dispatch(requestSWAPI());
  return fetchSWAPI(endpoint).then((data) => dispatch(receivedData(data)));
};
