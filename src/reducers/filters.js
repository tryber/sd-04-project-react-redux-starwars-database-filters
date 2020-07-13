import {
  FILTER_BY_NAME,
  FILTER_BUTTON,
  SAVE_FILTER,
  RECAP_CATEGORIES,
  REMOVE_FILTER,
  SAVE_ORDER,
  ORDER_BUTTON,
} from '../actions';
import reduceFilter from '../services/reduceFilter';

const INITIAL_STATE = {
  actualFilter: {
    column: '',
    comparison: '',
    value: '',
  },
  actualOrder: { column: '', sort: '' },
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
  categories: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
  comparisons: ['maior que', 'igual a', 'menor que'],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    case FILTER_BUTTON:
      return {
        ...state,
        actualFilter: INITIAL_STATE.actualFilter,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
        categories: reduceFilter(state.categories, state.filterByNumericValues, action.column),
      };
    case SAVE_FILTER:
      return { ...state, actualFilter: { ...state.actualFilter, [action.name]: action.value } };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter((o) => o.column !== action.col),
        categories: state.categories.concat(action.col),
      };
    case RECAP_CATEGORIES:
      return { ...state, categories: reduceFilter(state.categories, state.filterByNumericValues) };
    case SAVE_ORDER:
      return { ...state, actualOrder: { ...state.actualOrder, [action.column]: action.sort } };
    case ORDER_BUTTON:
      return { ...state, order: { column: action.column.toLowerCase(), sort: action.sort } };
    default:
      return state;
  }
};

export default filters;
