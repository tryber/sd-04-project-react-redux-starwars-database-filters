import { FILTERED_NAME, FILTERED_VALUES, DELETE_FILTER } from '../actions/types';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  filterOrder: {},
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERED_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };

    case FILTERED_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
      };
    default:
      return state;
  }
};

export default filters;
