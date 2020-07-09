import fecthFunction from '../services/fetchFunction';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';

const requestAPI = () => ({
  type: REQUEST_API,
});

const requestAPISuccess = (json) => ({
  type: REQUEST_API_SUCCESS,
  data: json,
});

const requestAPIFailure = (error) => ({
  type: REQUEST_API_FAILURE,
  error,
});

export const getAPI = () => (dispatch) => {
  dispatch(requestAPI());
  return fecthFunction().then(
    (planets) => dispatch(requestAPISuccess(planets.results)),
    (error) => dispatch(requestAPIFailure(error)),
  );
};
