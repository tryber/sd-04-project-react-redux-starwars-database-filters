import getSWAPI from '../services/APIplanets';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
// export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  results,
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
