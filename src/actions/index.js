import getSWAPI from '../services/APIplanets';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const FILTER_NAME = 'FILTER_NAME';
export const COMPARISON_FILTER = 'COMPARISON_FILTER';

export const filterName = (name) => ({
  type: FILTER_NAME,
  name,
});

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  results,
});

export const comparisonFilterAction = (comparisonFilter) => ({
  type: COMPARISON_FILTER,
  comparisonFilter,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getSWAPI()
      .then(
        (results) => dispatch(receivePlanetsSuccess(results)),
      );
  };
}

export default fetchPlanets;
