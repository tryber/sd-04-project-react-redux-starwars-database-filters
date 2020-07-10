import getPlanets from '../services/api';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCES';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const handleChange = (text) => ({
  type: HANDLE_CHANGE,
  text,
});

const requestApi = () => ({
  type: REQUEST_API,
});

const requestApiSuccess = (data) => ({
  type: REQUEST_API_SUCCESS,
  data,
});

const requestApiError = (error) => ({
  type: REQUEST_API_ERROR,
  error,
});

export function getSwPlanets() {
  return (dispatch) => {
    dispatch(requestApi());

    return getPlanets()
      .then(
        (data) => dispatch(requestApiSuccess(data)),
        (error) => dispatch(requestApiError(error)),
      );
  };
}
