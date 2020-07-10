import { DATA_FILTER, INPUT_FILTER } from '../actions/filterPlanets';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filteredData: [],
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.name,
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
