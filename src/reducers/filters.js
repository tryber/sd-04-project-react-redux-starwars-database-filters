import { INPUT_TEXT, INPUT_COLUMN, INPUT_COMPARISON, INPUT_VALUE } from '../actions/actionInput';

export const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

export const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filterByName: {
          name: action.text,
        },
      };
    case INPUT_COLUMN:
      return {
        ...state,
        filterByNumericValues: [
          {
            ...state.filterByNumericValues,
            column: action.column,
          },
        ],
      };
    case INPUT_COMPARISON:
      return {
        ...state,
        filterByNumericValues: [
          {
            ...state.filterByNumericValues,
            comparison: action.comparison,
          },
        ],
      };
    case INPUT_VALUE:
      return {
        ...state,
        filterByNumericValues: [
          {
            ...state.filterByNumericValues,
            value: action.value,
          },
        ],
      };
    default:
      return state;
  }
};
