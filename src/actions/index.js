import apiRequest from '../service';

export const GET_PLANETS_REQUEST = 'GET_PLANETS_REQUEST';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUM_VAL = 'FILTER_BY_NUM_VAL';
export const REMOVE_NUM_FILTER = 'REMOVE_NUM_FILTER';

export const getPlanetsRequest = () => ({
  type: GET_PLANETS_REQUEST,
});

export const getPlanetsSuccess = data => ({
  type: GET_PLANETS_SUCCESS,
  data,
});

export const getPlanetsFailure = error => ({
  type: GET_PLANETS_FAILURE,
  error,
});

const removeResidents = data => {
  const dataset = data.results.map(planet => {
    delete planet.residents;
    return planet;
  });
  return dataset;
};

const getAPIData = endpoint => dispatch => {
  dispatch(getPlanetsRequest());
  apiRequest(endpoint)
    .then(data => dispatch(getPlanetsSuccess(removeResidents(data))))
    .catch(error => dispatch(getPlanetsFailure(error)));
};

export default getAPIData;

export const filterByName = name => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByNumVal = (column, comparison, value) => ({
  type: FILTER_BY_NUM_VAL,
  column,
  comparison,
  value,
});

export const removeNumFilter = filter => ({
  type: REMOVE_NUM_FILTER,
  filter,
});
