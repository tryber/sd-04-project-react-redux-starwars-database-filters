import { GET_DATA, REQUEST_DATA } from '../actions/dataAction';

const INITIAL_STATE = {
  isFetching: false,
  planets: [],
}

export function planetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case GET_DATA:
      return { ...state, isFetching: false, planets: action.payload };
    default:
      return state;
  }
}
