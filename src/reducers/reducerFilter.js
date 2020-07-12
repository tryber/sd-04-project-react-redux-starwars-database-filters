import {
  FILTERED_NAME,
  FILTERED_NUMERIC_COLUMN,
  FILTERED_NUMERIC_COMPARISON,
  FILTERED_NUMERIC_VALUE,
  FILTERED_VALUES,
} from '../actions/types';

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
    case FILTERED_NUMERIC_COLUMN:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, { column: action.column }],
      };
    case FILTERED_NUMERIC_COMPARISON:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, { comparison: action.comparison }],
      };
    case FILTERED_NUMERIC_VALUE:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, { value: action.value }],
      };
    case FILTERED_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    default:
      return state;
  }
};

export default filters;
