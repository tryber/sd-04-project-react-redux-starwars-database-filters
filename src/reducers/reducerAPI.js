import { REQUEST_PLANETS, SUCCESS_PLANETS, FAILURE_PLANETS } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const reducerAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case SUCCESS_PLANETS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case FAILURE_PLANETS:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducerAPI;
