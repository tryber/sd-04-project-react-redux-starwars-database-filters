import getPlanets from '../services/SWAPI';

//  CONST REQUEST API ACTIONS
export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
//  CONST FILTER ACTIONS
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';

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

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const removeFilters = (filters) => ({
  type: REMOVE_FILTERS,
  filters,
});
