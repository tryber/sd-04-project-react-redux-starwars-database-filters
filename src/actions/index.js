import getPlanetsAPI from '../services/getPlanetsAPI';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

const requestingPlanets = () => ({
  type: REQUESTING_PLANETS,
});

const sucessPlanets = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const failurePlanets = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error,
});

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

const filterByNumericValue = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());

    return getPlanetsAPI().then(
      (data) => dispatch(sucessPlanets(data.results)),
      (error) => dispatch(failurePlanets(error))
    );
  };
}

export default filterByNumericValue;

export { filterByName, fetchPlanets };
