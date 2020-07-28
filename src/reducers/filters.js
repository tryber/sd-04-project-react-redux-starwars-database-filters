import { INPUT_TEXT } from '../actions/actionInput';
import { ADDON_STORE_FILTERS, RADION_ASC } from '../actions/actionFilter';
import { DELETE_FILTER } from '../actions/actionDelete';

export const INITIAL_STATE = {
  inputNumber: '',
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
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
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (filtro, index) => index !== action.deleted,
        ),
      };
    case RADION_ASC:
      return {
        ...state,
        order: {
          ...state.order,
          column: action.column,
          sort: action.radio,
        },
      };
    default:
      return state;
  }
};
