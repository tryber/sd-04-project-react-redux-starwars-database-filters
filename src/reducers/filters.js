import { FILTER_BY_NAME, FILTER_BY_NUMBER, DELETE_FILTER } from '../actions/filters';

const INITIAL_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};
const filters = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMBER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.filter],
      };
    case DELETE_FILTER: {
      return {
        ...state,
        filterByNumericValues: [action.filter],
      };
    }
    default:
      return state;
  }
};

export default filters;
