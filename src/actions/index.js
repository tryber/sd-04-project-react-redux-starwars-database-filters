import fetchSWAPI from '../services/fetchSWAPI';

// API action
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
//

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const filterByName = (name) => ({ type: FILTER_BY_NAME, name });
