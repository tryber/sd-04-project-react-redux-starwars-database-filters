import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  HANDLE_CHANGE,
  SAVE_FILTER_DATA,
} from '../actions';

const INICIAL_STATE = {
  isLoading: false,
  data: {},
  error: {},
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const swPlanetsReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case REQUEST_API_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        filters: { ...state.filters, filterByName: { name: action.text } },
      };
    case SAVE_FILTER_DATA:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            { column: action.column, comparison: action.comparison, value: action.number },
          ],
        },
      };
    default:
      return state;
  }
};

export default swPlanetsReducer;
