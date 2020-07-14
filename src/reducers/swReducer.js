import { SW_REQUEST, SW_SUCCESS, SW_FAILURE } from '../actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const swReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_REQUEST:
      return { ...state, loading: true };
    case SW_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case SW_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default swReducer;
