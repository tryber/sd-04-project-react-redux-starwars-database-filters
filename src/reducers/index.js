import {
  REQUEST_API,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  SEARCH_PLANET,
  FILTER_NUMBERS,
} from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_SUCCESS:
      return { ...state, data: action.data.results, loading: false };
    case REQUEST_ERROR:
      return { ...state, error: action.error, loading: false };
    case SEARCH_PLANET:
      return {
        ...state,
        filters: { ...state.filters, filterByName: { name: action.planetName } },
      };
    case FILTER_NUMBERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            {
              column: action.value.column,
              comparison: action.value.comparison,
              value: action.value.value,
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default reducer;
