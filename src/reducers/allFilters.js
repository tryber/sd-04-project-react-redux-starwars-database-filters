import { FILTER_BY_NAME, FILTER_BY_NUM_VAL } from '../actions';

const initialState = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

function allFilters(
  state = initialState,
  {
    type, name, column, comparison, value,
  },
) {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { name },
        },

      };
    case FILTER_BY_NUM_VAL:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            { column, comparison, value },
          ],
        },
      };
    default:
      return state;
  }
}

export default allFilters;
