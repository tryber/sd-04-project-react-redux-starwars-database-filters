import getPlanetsAPI from '../services/planetsAPI';

export const IS_LOADED = 'IS_LOADED';
export const DATA_RESULTS = 'DATA_RESULTS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

const isLoaded = () => ({
  type: 'IS_LOADED',
});

const dataResults = (data) => ({
  type: 'DATA_RESULTS',
  data,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(isLoaded());
    getPlanetsAPI()
      .then((data) => dispatch(dataResults(data.results)));
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByNumericValue = (column, comparison, value) => ({
  type: 'FILTER_BY_NUMERIC_VALUES',
  column,
  comparison,
  value,
});
