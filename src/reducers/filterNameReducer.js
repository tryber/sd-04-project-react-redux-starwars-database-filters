import { FILTER_NAME, FILTER_NUMBER, REMOVE_FILTER, SORT_FILTERS } from '../actions/filterPlanetByName';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  columns: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  comparisons: ['maior que', 'igual a', 'menor que'],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_NUMBER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.filter.column,
        ),
      };
    case SORT_FILTERS:
      return {
        ...state, order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filters;
