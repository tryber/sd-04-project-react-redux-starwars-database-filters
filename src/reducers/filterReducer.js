import { DATA_FILTER, INPUT_FILTER } from '../actions/filterPlanets';

const INICIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
  filteredData: [],
};

export default function filterReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            // ...state.filters.filterByName.name,
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
