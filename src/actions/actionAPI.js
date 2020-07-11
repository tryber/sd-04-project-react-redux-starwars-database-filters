import getPlanet from '../services/api';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API_SUCESS = 'RECEIVE_API_SUCESS';
export const RECEIVE_API_FAILURE = 'RECEIVE_API_FAILURE';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveSucess = ({ results }) => ({
  type: RECEIVE_API_SUCESS,
  results,
});

export const receiveFailure = (error) => ({
  type: RECEIVE_API_FAILURE,
  error,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());

    return getPlanet().then(
      (data) => dispatch(receiveSucess(data)),
      (error) => dispatch(receiveFailure(error.message)),
    );
  };
}
