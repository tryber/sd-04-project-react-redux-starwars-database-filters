import { FILTER_BY_NAME } from '../actions/filters';

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
    default:
      return state;
  }
};

export default filters;
