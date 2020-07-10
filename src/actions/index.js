import getPLanets from '../service/swApi';

export const REQUEST_SW_PLANETS = 'REQUEST_SW_PLANETS';
export const REQUEST_SW_PLANETS_SUCCESS = 'REQUEST_SW_PLANETS_SUCCESS';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const NUMERIC_FILTER = 'NUMERIC_FILTER';
// export const NUMERIC_FILTER_VALUE = 'NUMERIC_FILTER_VALUE';
// export const NUMERIC_FILTER_COMPARISON = 'NUMERIC_FILTER_COMPARISON';

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

// const filterColumn = (column) => ({
//   type: NUMERIC_FILTER_COLUMN,
//   column,
// });
// const filterComparison = (comparison) => ({
//   type: NUMERIC_FILTER_COLUMN,
//   comparison,
// });
// const filterValue = (value) => ({
//   type: NUMERIC_FILTER_COLUMN,
//   value,
// });

function fetchSWPlanets() {
  return (dispatch) => {
    dispatch(requestSWPlanets());
    return getPLanets().then((data) => dispatch(receiveSWPlanets(data)));
  };
}

export { fetchSWPlanets, changeHandler, filterByNumber };
