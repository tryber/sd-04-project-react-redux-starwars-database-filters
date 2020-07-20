import { FILTER_BY_NAME } from '../actions/filters';

const INITIAL_FILTERS = {
  filters: '',
};
const filterPlanets = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      console.log(state.filters.filterByName);
      return {
        ...state,
        filters: { filterByName: action.name },
      };
    default:
      return state;
  }
};

export default filterPlanets;
