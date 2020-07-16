import { INPUT_TEXT } from '../actions/actionInput';
import { ADDON_STORE_FILTERS } from '../actions/actionFilter';

export const INITIAL_STATE = {
  inputNumber: '',
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
    case ADDON_STORE_FILTERS:
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
    default:
      return state;
  }
};
