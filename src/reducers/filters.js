import {
  SEARCH_TEXT, COMPARISON_FILTER, DELETE_FILTER } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.searchText,
        },
      };
    case COMPARISON_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.comparisonFilter.column,
            comparison: action.comparisonFilter.comparison,
            value: action.comparisonFilter.value,
          },
        ],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(({ column }) => (
          column !== action.deleteFilter.column
        )),
      };
    default:
      return state;
  }
};

export default filters;
