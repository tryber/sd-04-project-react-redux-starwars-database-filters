import getStarsWarsPlanets from '../services/planetsAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const SEARCH_TEXT = 'SEARCH_TEXT';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  results,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  error,
});

const searchTextAction = (searchText) => ({
  type: SEARCH_TEXT,
  searchText,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getStarsWarsPlanets()
      .then(
        (results) => dispatch(receivePlanetsSuccess(results)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}

export { searchTextAction };
