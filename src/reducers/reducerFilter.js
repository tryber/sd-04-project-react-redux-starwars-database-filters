import { FILTER_NAME, COMPARISON_FILTER } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
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
    default:
      return state;
  }
};

export default filters;
