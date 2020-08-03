import getPlanetsAPI from '../services/getPlanetsAPI';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER_BY_NUMERIC_VALUES = 'REMOVE_FILTER_BY_NUMERIC_VALUES';
export const SUBMIT_RADIO = 'SUBMIT_RADIO';

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

// Action criator assíncrono - é uma função do Thunk
// Esse é composto de 3 action síncronas.
// São essas 3 acima.
export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());

    return getPlanetsAPI().then(
      (data) => dispatch(sucessPlanets(data.results)),
      (error) => dispatch(failurePlanets(error)),
    );
  };
}

// Action criator síncrono
export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

// Action criator síncrono
export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const removeNumericFilter = (filterKeys) => ({
  type: REMOVE_FILTER_BY_NUMERIC_VALUES,
  filterKeys,
});

export const submitRadioAct = (column, sort) => ({
  type: 'SUBMIT_RADIO',
  column,
  sort,
});
