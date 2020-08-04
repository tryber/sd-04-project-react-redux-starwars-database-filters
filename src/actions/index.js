import getPlanetsAPI from '../services/api';

export const REQUESTING_PLANETS = 'REQUESTING_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCCESS';
export const REQUEST_PLANETS_ERROR = 'REQUEST_PLANETS_ERROR';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const requestingPlanets = () => ({
  type: REQUESTING_PLANETS, // momento que esta fazendo a requesição
});

const sucessPlanets = (data) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data,
});

const errorPlanets = (error) => ({
  type: REQUEST_PLANETS_ERROR,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestingPlanets());

    return getPlanetsAPI().then(
      (data) => dispatch(sucessPlanets(data.results)),
      (error) => dispatch(errorPlanets(error)),
    );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});
