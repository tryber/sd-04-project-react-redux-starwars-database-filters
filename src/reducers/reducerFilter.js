import { FILTERED_NAME, FILTERED_VALUES, DELETE_FILTER } from '../actions/types';

const selectOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  options: selectOptions,
  filterOrder: {},
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERED_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTERED_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
        options: [...state.options.filter((column) => column !== action.column )],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
      };
    default:
      return state;
  }
};

export default filters;
