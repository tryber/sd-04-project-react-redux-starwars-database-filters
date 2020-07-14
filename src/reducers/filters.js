import { HANDLE_CHANGE, SAVE_FILTER_DATA, REMOVE_FILTERS, SORT_FILTERS } from '../actions';

const INICIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
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
      };
    case REMOVE_FILTERS:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
        options: [...state.options, action.column],
      };
    case SORT_FILTERS:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filters;
