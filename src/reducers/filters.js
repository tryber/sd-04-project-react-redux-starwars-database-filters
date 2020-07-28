import { FILTER_BY_TEXT, SAVE_FILTER_DATA, RESET_FILTER } from '../actions/actions';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TEXT:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case SAVE_FILTER_DATA:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case RESET_FILTER:
      return { ...state, filterByNumericValues: action.filters };
    default:
      return state;
  }
};

export default filters;
