import { SW_REQUEST, SW_SUCCESS, SW_FAILURE } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  filteredData: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
};

const swReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_REQUEST:
      return { ...state, isFetching: true };
    case SW_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.data],
        filteredData: [...action.data],
      };
    case SW_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default swReducer;
