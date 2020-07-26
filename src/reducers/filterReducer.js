import { FILTER_BY_NAME } from "../actions/dataAction";

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: "",
    },
  },
};

function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filters: { filterByName: { name: action.name } } };
    default:
      return state;
  }
}

export default filterReducer;
