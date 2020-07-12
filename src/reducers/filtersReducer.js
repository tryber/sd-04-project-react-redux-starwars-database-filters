
import { SEARCH_PLANET_NAME } from '../actions/actionFilter';

const INITIAL_STATE = {
  // searching: false,
  filterByName: {
    name: '',
  },
  filteredData: [],
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_PLANET_NAME:
      return {
        ...state,
        filteredData: action.data,
        filterByName: {
          name: action.name,
        },
      };
    default:
      return state;
  }
}
