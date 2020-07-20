import { FILTER_BY_NAME } from '../actions/filters';

const INITIAL_FILTERS = {
  filters: { filterByName: { name: '' } },
};
const filterPlanets = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: { filterByName: { name: action.name } },
      };
    default:
      return state;
  }
};

export default filterPlanets;
