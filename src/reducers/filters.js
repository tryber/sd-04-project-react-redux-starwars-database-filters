import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, FILTER_REMOVE } from '../actions';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }],
      };
    case FILTER_REMOVE:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((e) => e !== action.Remove),
        ],
      };
    // case ORDER_COLUMN:
    //   return { ...state, order: { column: action.column, sort: action.sort } };
    default:
      return state;
  }
};


export default filters;
