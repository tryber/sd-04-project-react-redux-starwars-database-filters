import { SUCCESS_RESPONSE, FAILED_RESPONSE } from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  error: '',
};

const planetTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUCCESS_RESPONSE:
      return { ...state, isFetching: false, data: action.results };
    case FAILED_RESPONSE:
      return { ...state, isFetching: false, error: action.message };
    default:
      return state;
  }
};

export default planetTableReducer;
