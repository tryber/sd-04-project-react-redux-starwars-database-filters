import {
  SUCCESS_RESPONSE,
  FAILED_RESPONSE,
  CHANGE_SEARCH,
  SEARCH_FILTER,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const planetTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS_RESPONSE:
      return { ...state, isFetching: false, data: action.results };
    case FAILED_RESPONSE:
      return { ...state, isFetching: false, error: action.message };
    case CHANGE_SEARCH:
      return {
        ...state,
        filters: { filterByName: { name: action.seacrhTerm } },
      };
    case SEARCH_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [...state.filters.filterByNumericValues, action.numericFilters],
        },
      };
    default:
      return state;
  }
};

export default planetTableReducer;
