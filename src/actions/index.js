import getPlanets from '../services/api';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const SAVE_FILTER_DATA = 'SAVE_FILTER_DATA';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';
export const SORT_FILTERS = 'SORT_FILTERS';

export const sortFilters = (column, sort) => ({
  type: SORT_FILTERS,
  column,
  sort,
});

export const remove = (column) => ({
  type: REMOVE_FILTERS,
  column,
});

export const saveFilterData = (column, comparison, number) => ({
  type: SAVE_FILTER_DATA,
  column,
  comparison,
  number,
});

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

    return getPlanets().then(
      (data) => dispatch(requestApiSuccess(data.results)),
      (error) => dispatch(requestApiError(error)),
    );
  };
}
