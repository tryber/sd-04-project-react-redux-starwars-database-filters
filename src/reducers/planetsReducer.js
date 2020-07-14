import { REQUEST_PLANETS, RECEIVE_PLANETS, FAIL_REQUEST } from '../actions';

const INITIAL_STATE = {
  isFetching: true,
  data: [],
};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        isFetching: false,
        data: action.planets,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsReducer;
