// import { combineReducers } from 'redux';
// import swPlanets from './swplanets';

// const rootReducer = combineReducers({ swPlanets });

// export default rootReducer;

import {
  REQUEST_SW_PLANETS,
  REQUEST_SW_PLANETS_SUCCESS,
  SEARCH_TEXT,
  // NUMERIC_FILTER_COLUMN,
  // NUMERIC_FILTER_VALUE,
  // NUMERIC_FILTER_COMPARISON,
  NUMERIC_FILTER,
} from '../actions';

const INITIAL_SW_PLANETS = {
  isFetching: false,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const swPlanets = (state = INITIAL_SW_PLANETS, action) => {
  switch (action.type) {
    case REQUEST_SW_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SW_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.results,
      };
    case SEARCH_TEXT:
      return {
        ...state,
        filters: {
          ...state.filters.filterByNumericValues,
          filterByName: { name: action.searchText },
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            {
              column: action.data.column.value,
              comparison: action.data.comparison.value,
              value: action.data.inputNumber.value,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default swPlanets;
