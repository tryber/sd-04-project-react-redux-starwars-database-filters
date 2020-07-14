import apiFetch from '../services/apiFetch';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_ERROR = 'REQUEST_PLANETS_ERROR';

export const requestPlanets = () => ({
  type: REQUEST_PLANETS,
  loading: false,
});

export const requestPlanetsSuccess = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  loading: true,
  data,
});

export const requestPlanetsError = (error) => ({
  type: REQUEST_PLANETS_ERROR,
  loading: true,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    apiFetch().then(
      (data) => dispatch(requestPlanetsSuccess(data.results)),
      (error) => dispatch(requestPlanetsError(error.message)),
    );
  };
}
