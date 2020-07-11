import { REQUEST_API, RECEIVE_API_SUCESS, RECEIVE_API_FAILURE } from '../actions/actionAPI';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

export default function planetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_SUCESS:
      return {
        ...state,
        isFetching: false,
        data: action.results,
      };
    case RECEIVE_API_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
