import { SEARCH_TEXT, NUMERIC_FILTER } from '../actions';

const INITIAL_FILTER_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.state.column,
            comparison: action.state.comparison,
            value: action.state.value,
          },
        ],
      };
    default:
      return state;
  }
};

export default filters;
