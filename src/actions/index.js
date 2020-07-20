import planetsAPI from '../services/starWarsAPI';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const SEARCH_PLANET = 'SEARCH_PLANET';
export const FILTER_NUMBERS = 'FILTER_NUMBERS';

const requestAPI = () => ({
  type: REQUEST_API,
});

const successAPI = (data) => ({
  type: REQUEST_SUCCESS,
  data,
});

const errorAPI = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const changeSearch = (planetName) => ({
  type: SEARCH_PLANET,
  planetName,
});

export const filtered = (value) => ({
  type: FILTER_NUMBERS,
  value,
});

export function getPlanets() {
  return (dispatch) => {
    dispatch(requestAPI());

    return planetsAPI().then(
      (data) => dispatch(successAPI(data)),
      (error) => dispatch(errorAPI(error)),
    );
  };
}
