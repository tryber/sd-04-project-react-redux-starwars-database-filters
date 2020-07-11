import getPLanets from '../service/swApi';

export const REQUEST_SW_PLANETS = 'REQUEST_SW_PLANETS';
export const REQUEST_SW_PLANETS_SUCCESS = 'REQUEST_SW_PLANETS_SUCCESS';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const NUMERIC_FILTER = 'NUMERIC_FILTER';

const requestSWPlanets = () => ({
  type: REQUEST_SW_PLANETS,
});

const receiveSWPlanets = ({ results }) => ({
  type: REQUEST_SW_PLANETS_SUCCESS,
  results,
});

const changeHandler = (searchText) => ({
  type: SEARCH_TEXT,
  searchText,
});

const filterByNumber = (data) => ({
  type: NUMERIC_FILTER,
  data,
});

function fetchSWPlanets() {
  return (dispatch) => {
    dispatch(requestSWPlanets());
    return getPLanets()
      .then((data) => dispatch(receiveSWPlanets(data)))
      .catch((error) => error);
  };
}

export { fetchSWPlanets, changeHandler, filterByNumber };
