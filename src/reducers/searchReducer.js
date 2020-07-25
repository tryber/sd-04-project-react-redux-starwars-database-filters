import { SEARCH_PLANET } from '../actions/searchAction';

const INITIAL_STATE = {
  planets: [],
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_PLANET:
      return { ...state, planets: action.planets };
    default:
      return state;
  }
}

export default searchReducer;
