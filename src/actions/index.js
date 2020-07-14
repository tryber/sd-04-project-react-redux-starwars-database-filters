import apiFetch from '../services/apiFetch';
import { ACTION_GET_API, ACTION_SUCESS, ACTION_FAILURE } from './types';

const actionGetApi = () => ({
  type: ACTION_GET_API,
});

const actionSucess = (data) => ({
  type: ACTION_SUCESS,
  data,
});

const actionFailure = (error) => ({
  type: ACTION_FAILURE,
  error,
});

const requestFetch = () => (dispatch) => {
  dispatch(actionGetApi());
  return apiFetch().then(
    (data) => dispatch(actionSucess(data.results)),
    (error) => dispatch(actionFailure(error.message)),
  );
};

export default requestFetch;
