import { INPUT_FILTER, DATA_FILTER } from '../actions/filterPlanets';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
  filteredData: [],
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            name: action.name,
          },
        },
      };
    case DATA_FILTER:
      return {
        ...state,
        filteredData: action.data,
      };
    default:
      return state;
  }
}
