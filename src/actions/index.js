import apiRequest from '../service';

export const GET_PLANETS_REQUEST = 'GET_PLANETS_REQUEST';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';

export const getPlanetsRequest = () => ({
  type: GET_PLANETS_REQUEST,
});

export const getPlanetsSuccess = (results) => ({
  type: GET_PLANETS_SUCCESS,
  payload: results,
});

export const getPlanetsFailure = (error) => ({
  type: GET_PLANETS_FAILURE,
  payload: error,
});

const getData = (endpoint) => {
  return (dispatch) => {
    dispatch(getPlanetsRequest());
    apiRequest(endpoint)
      .then((data) => dispatch(getPlanetsSuccess(data)))
      .catch((error) => dispatch(getPlanetsFailure(error)));
  };
};

export default getData;
