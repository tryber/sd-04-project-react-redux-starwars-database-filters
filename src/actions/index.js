import getPlanetsData from '../service/SWAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_SWAPI_PLANETS_SUCCESS';
export const REQUEST_PLANETS_FAIL = 'REQUEST_PLANETS_FAIL';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const requestPlanetsFail = () => ({
  type: REQUEST_PLANETS_FAIL,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanetsData().then(
      (planets) => dispatch(requestPlanetsSuccess(planets.results)),
      (error) => dispatch(requestPlanetsFail(error)),
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

export const removeFilter = (filtered) => ({
  type: REMOVE_FILTER,
  filtered,
});
