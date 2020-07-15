import { SW_REQUEST, SW_SUCCESS } from '../actions/';

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
    default:
      return state;
  }
}

export default swReducer;
