import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILURE,
  FILTER_BY_NAME,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  filters: { filterByName: { name: '' } },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { ...state.filters.filterByName, name: action.name },
        },
      };
    default:
      return state;
  }
};

export default reducer;
