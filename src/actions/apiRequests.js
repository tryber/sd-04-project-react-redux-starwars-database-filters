export const FETCH_PLANETS_REQUEST = 'FETCH_PLANETS_REQUEST';
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS';
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE';

export const fetchPlanetsRequest = () => ({ type: FETCH_PLANETS_REQUEST });

export const fetchPlanetsSuccess = (planets) => ({
  type: FETCH_PLANETS_SUCCESS,
  payload: planets,
});

export const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  payload: error,
});

export const fetchPlanets = () =>
  function (dispatch) {
    dispatch(fetchPlanetsRequest);
    return fetch('https://swapi-trybe.herokuapp.com/api/planets')
      .then((response) => response.json())
      .then((json) => dispatch(fetchPlanetsSuccess(json.results)))
      .catch((error) => dispatch(fetchPlanetsFailure(error)));
  };
