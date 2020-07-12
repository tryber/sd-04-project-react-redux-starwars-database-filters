import {
  FILTERED_NAME,
  FILTERED_NUMERIC_COLUMN,
  FILTERED_NUMERIC_COMPARISON,
  FILTERED_NUMERIC_VALUE,
} from '../actions/types';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterNumericValues: [
    {
      column: 'teste',
      comparison: 'teste2',
      value: '55',
    },
  ],
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
        filterNumericValues: [{ column: action.column }],
      };
    case FILTERED_NUMERIC_COMPARISON:
      return {
        ...state,
        filterNumericValues: [{ comparison: action.comparison }],
      };
    case FILTERED_NUMERIC_VALUE:
      return {
        ...state,
        filterNumericValues: [...state.filterNumericValues, { value: action.value }],
      };
    default:
      return state;
  }
};

export default filters;
