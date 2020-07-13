import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, RESET_FILTER } from '../actions';

const INITIAL_STATE = { filterByName: { name: '' }, filterByNumericValues: [] };

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
        filterByName: { ...state.filterByName },
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
        filterByName: { ...state.filterByName },
        filterByNumericValues: action.filters,
      };
    default:
      return state;
  }
};

export default filters;
