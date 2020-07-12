import { SEARCH_TEXT, NUMERIC_FILTER, REMOVE_FILTER } from '../actions';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  options: [
    'Column',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};
const filters = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        filterByName: { name: action.searchText },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.data.column,
            comparison: action.data.comparison,
            value: action.data.value,
          },
        ],
        options: state.options.filter((option) => option !== action.data.column),
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.filterToRemove,
        ),
        options: [...state.options, action.filterToRemove],
      };
    default:
      return state;
  }
};

export default filters;
