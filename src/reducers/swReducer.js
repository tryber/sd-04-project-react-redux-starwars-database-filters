import { SW_REQUEST, SW_SUCCESS, SW_FAILURE } from '../actions';
//SW_FILTER_NAME
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
      return {
        ...state,
        isFetching: true,
      };
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

// case SW_FILTER_NAME:
//   return {
//     ...state,
//     filters: {
//       ...state.filters,
//       filterByName: { name: action.name },
//     },
//     filteredData: state.data.filter(({ name }) =>
//       name.includes(action.name)
//     ),
