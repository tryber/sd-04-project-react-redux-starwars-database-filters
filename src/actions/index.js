import apiRequest from '../service';

export const GET_PLANETS_REQUEST = 'GET_PLANETS_REQUEST';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const getPlanetsRequest = () => ({
  type: GET_PLANETS_REQUEST,
});

export const getPlanetsSuccess = data => ({
  type: GET_PLANETS_SUCCESS,
  data,
});

export const getPlanetsFailure = error => ({
  type: GET_PLANETS_FAILURE,
  error,
});

const getAPIData = endpoint => dispatch => {
  dispatch(getPlanetsRequest());
  apiRequest(endpoint)
    .then(data => dispatch(getPlanetsSuccess(data)))
    .catch(error => dispatch(getPlanetsFailure(error)));
};

export default getAPIData;

export const filterByName = name => ({
  type: FILTER_BY_NAME,
  name,
});
