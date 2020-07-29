import getPlanetsAPI from '../services/planetsAPI';

export const IS_LOADED = 'IS_LOADED';
export const DATA_RESULTS = 'DATA_RESULTS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER_BY_NUMERIC_VALUES = 'REMOVE_FILTER_BY_NUMERIC_VALUES';
export const SORTING = 'SORTING';

const isLoaded = () => ({
  type: 'IS_LOADED',
});

const dataResults = (data) => ({
  type: 'DATA_RESULTS',
  data,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(isLoaded());
    getPlanetsAPI()
      .then((data) => dispatch(dataResults(data.results)));
  };
}

export const filterByName = (name) => ({
  type: 'FILTER_BY_NAME',
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: 'FILTER_BY_NUMERIC_VALUES',
  column,
  comparison,
  value,
});

export const removeNumericFilter = (filterKeys) => ({
  type: 'REMOVE_FILTER_BY_NUMERIC_VALUES',
  filterKeys,
});

export const sorting = (column, act) => ({
  type: 'SORTING',
  column,
  act,
});
