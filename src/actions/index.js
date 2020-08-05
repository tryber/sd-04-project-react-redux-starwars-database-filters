import ApiPlanet from '../services/ApiPlanets';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const REQUEST_PLANET_SUCCESS = 'REQUEST_PLANET_SUCCESS';
export const REQUEST_PLANET_FAILURE = 'REQUEST_PLANET_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const FILTER_REMOVE = 'FILTER_REMOVE';
export const ORDER_COLUMN = 'ORDER_COLUMN';

const requestingPlanets = () => ({
  type: REQUESTING_PLANETS,

});


const successPlanets = (data) => ({
  type: REQUEST_PLANET_SUCCESS,
  data,
});

const failurePlanets = (error) => ({
  type: REQUEST_PLANET_FAILURE,
  error,
});


export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());

    return ApiPlanet().then(
      (data) => dispatch(successPlanets(data.results)),
      (error) => dispatch(failurePlanets(error)),
    );
  };
}

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

export const filterRemove = (Remove) => ({
  type: FILTER_REMOVE,
  Remove,
});

export const orderColumns = (column, sort) => ({
  type: ORDER_COLUMN,
  column,
  sort,
});

export default fetchPlanets;
