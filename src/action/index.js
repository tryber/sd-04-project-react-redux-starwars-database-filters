import apiPlanets from '../services/index';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const ORDER_COLUMN = 'ORDER_COLUMN';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER_BY_NUMERIC_VALUES = 'REMOVE_FILTER_BY_NUMERIC_VALUES';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const sucessPlanets = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const failurePlanets = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return apiPlanets().then((json) => dispatch(sucessPlanets(json.results)),
    (error) => dispatch(failurePlanets(error)),
    );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const orderColumns = (column, sort) => ({
  type: ORDER_COLUMN,
  column,
  sort,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const removeFilterNumeric = (obj) => ({
  type: REMOVE_FILTER_BY_NUMERIC_VALUES,
  obj,
});
