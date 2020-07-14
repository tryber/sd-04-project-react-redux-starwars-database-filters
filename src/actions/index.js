import fecthFunction from '../services/fetchFunction';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILURE = 'REQUEST_API_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMBERS = 'FILTER_BY_NUMBERS';
export const FILTER_BUTTON = 'FILTER_BUTTON';
export const SAVE_FILTER = 'SAVE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SAVE_ORDER = 'SAVE_ORDER';
export const ORDER_BUTTON = 'ORDER_BUTTON';

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

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name: name.toLowerCase(),
});

export const filterButton = (column, comparison, value) => ({
  type: FILTER_BUTTON,
  column,
  comparison,
  value,
});

export const saveFilter = (name, value) => ({
  type: SAVE_FILTER,
  name,
  value,
});

export const removeFilter = (col) => ({
  type: REMOVE_FILTER,
  col,
});

export const saveOrder = (column, sort) => ({
  type: SAVE_ORDER,
  column,
  sort,
});

export const orderButton = (column, sort) => ({
  type: ORDER_BUTTON,
  column,
  sort,
});
