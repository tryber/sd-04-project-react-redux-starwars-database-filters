import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filtersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.event,
        },
      };
    case types.FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case types.DELETE_FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
      };
    default:
      return state;
  }
}

export default filtersReducer;
