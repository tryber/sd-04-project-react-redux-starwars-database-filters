import {
  SW_FILTER_NAME,
  SW_FILTER_BTN,
  SW_FILTER_SV,
  SW_CAT,
} from '../actions';
import redFil from '../services/redFil';

const INITIAL_STATE = {
  actualFilter: {
    column: '',
    comparison: '',
    value: '',
  },
  filterByName: { name: '' },
  filterByNumericValues: [],
  categories: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_FILTER_NAME:
      return { ...state, filterByName: { name: action.name } };
    case SW_FILTER_BTN:
      return {
        ...state,
        actualFilter: INITIAL_STATE.actualFilter,
        filterByName: { name: '' },
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value }],
        categories: redFil(state.categories, state.filterByNumericValues)};
    case SW_FILTER_SV:
      return {
        ...state,
        filterByName: { name: '' },
        actualFilter: { ...state.actualFilter, [action.name]: action.value}};
    case SW_CAT:
      return {
        ...state,
        categories: redFil(state.categories, state.filterByNumericValues),
      };
    default:
      return state;
  }
};

export default filterReducer;
