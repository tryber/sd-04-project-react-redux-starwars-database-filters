import { REQUEST_API, REQUEST_API_SUCCESS } from '../actions';

const initialState = {
  data: [],
  loading: false,
};

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: action.loading };
    case REQUEST_API_SUCCESS:
      return { ...state, loading: action.loading, data: action.data };
    default:
      return state;
  }
};

export default swapiReducer;
