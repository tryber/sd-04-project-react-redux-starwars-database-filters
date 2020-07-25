import { GET_DATA, REQUEST_DATA } from '../actions/dataAction';

const INITIAL_STATE = {
  isFetching: false,
  planets: [],
};

function planetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: false };
    case GET_DATA:
      return { ...state, isFetching: true, planets: action.planets };
    default:
      return state;
  }
}

export default planetReducer;
