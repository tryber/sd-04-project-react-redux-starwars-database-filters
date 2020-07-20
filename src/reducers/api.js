import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const api = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case REQUEST_API_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case REQUEST_API_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default api;
