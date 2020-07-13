import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, RESET_FILTER, ORDER } from '../actions';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues],
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        // filterByName: { ...state.filterByName },
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case RESET_FILTER:
      return {
        ...state,
        // filterByName: { ...state.filterByName },
        filterByNumericValues: action.filters,
      };
    case ORDER:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filters;
