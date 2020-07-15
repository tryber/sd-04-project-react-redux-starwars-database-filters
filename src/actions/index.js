import getPlanets from '../services/SWAPI';

export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

const requestSWAPI = () => ({
  type: REQUEST_SWAPI,
});

const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  data,
});

const requestFail = (error) => ({
  type: REQUEST_FAIL,
  error,
});

export const getSWAPI = () => {
  //  thunk
  return (dispatch) => {
    dispatch(requestSWAPI());
    return getPlanets().then(
      (data) => dispatch(requestSuccess(data.results)),
      (error) => dispatch(requestFail(error))
    );
  };
};
