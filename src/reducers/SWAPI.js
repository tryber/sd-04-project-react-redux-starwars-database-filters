import { REQUEST, RECEIVED_DATA } from '../actions';

const INITIAL_STATE = { loading: false, data: [] };

export const reducerSWAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case RECEIVED_DATA:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
  }
};

export default reducerSWAPI;
