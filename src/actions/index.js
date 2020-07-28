import getPlanets from '../services/SWAPI';

export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

//  actions API
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

export const getSWAPI = () =>
  //  thunk
  (dispatch) => {
    dispatch(requestSWAPI());
    return getPlanets().then(
      (data) => dispatch(requestSuccess(data.results)),
      (error) => dispatch(requestFail(error)),
    );
  };

//  action filter
export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});
