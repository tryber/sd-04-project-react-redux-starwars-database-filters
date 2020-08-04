import { FILTER_BY_NAME, FILTER_BY_NUM_VAL, REMOVE_NUM_FILTER } from '../actions';

const initialState = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function allFilters(
  state = initialState,
  {
    type, name, column, comparison, value, filter,
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
    case REMOVE_NUM_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: state.filters.filterByNumericValues.filter(
            ({ column }) => column !== filter,
          ),
        },
      };
    default:
      return state;
  }
}

export default allFilters;
