import { GET_DATA, REQUEST_DATA, FAILED_REQUEST } from '../actions/dataAction';

const INITIAL_STATE = {
  isFetching: false,
  planetPath: '',
  error: '',
}

export function planetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case GET_DATA:
      return { ...state, isFetching: false, planetPath: action.payload };
    case FAILED_REQUEST:
      return { ...state, isFetching:false, error: action.payload };
    default:
      return state;
  }
}
