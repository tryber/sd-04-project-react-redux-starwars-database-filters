import { SW_REQUEST, SW_SUCCESS, SW_FAILURE } from '../actions/';

const INITIAL_STATE = {
  isLoading: true,
  data: {},
};

function swReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SW_REQUEST:
      return { ...state, isLoading: true };
    case SW_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case SW_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}

export default swReducer;
