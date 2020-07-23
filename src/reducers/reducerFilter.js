import { FILTERED_NAME, FILTERED_VALUES, DELETE_FILTER, FILTERED_ORDER } from '../actions/types';

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
  order: {
    column: 'Name',
    sort: 'ASC',
  },
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
        options: [...state.options.filter((column) => column !== action.column)],
      };
    case DELETE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
        options: [...state.options, action.column],
      };
    case FILTERED_ORDER:
      return { ...state, order: { column: action.column, sort: action.sort } };
    default:
      return state;
  }
};

export default filters;
