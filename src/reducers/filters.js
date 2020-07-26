import { FILTER_BY_NAME, FILTER_BY_NUMBER } from '../actions/filters';

const INITIAL_FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  columns: [],
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
        filterByNumericValues: action.filter,
      };
    default:
      return state;
  }
};

export default filters;
