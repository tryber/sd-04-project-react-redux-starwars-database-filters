import { HANDLE_CHANGE, SAVE_FILTER_DATA, REMOVE_FILTERS } from '../actions';

const INICIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],

  options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

const filters = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        filterByName: { name: action.text },
      };
    case SAVE_FILTER_DATA:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.number },
        ],
        options: state.options.filter((option) => option !== action.column),
      };
    case REMOVE_FILTERS:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
        options: [...state.options, action.column],
      };
    default:
      return state;
  }
};

export default filters;
