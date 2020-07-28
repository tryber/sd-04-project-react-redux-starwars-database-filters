import {
  FILTER_BY_NAME,
  ORDER_COLUMN,
  FILTER_BY_NUMERIC_VALUES,
  REMOVE_FILTER_BY_NUMERIC_VALUES,
} from '../action/index';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    case ORDER_COLUMN:
      return { ...state, order: { column: action.column, sort: action.sort } };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues,
        {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }],
      };
    case REMOVE_FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((filter) => filter !== action.obj),
        ] };
    default:
      return state;
  }
};

export default filters;
