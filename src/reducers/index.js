import { combineReducers } from 'redux';
import { DATA_REQUEST, DATA_RECEIVED, DATA_RECEIVED_ERROR } from '../actions';

const initialState = {
  loading: true,
  data: [],
  error: {},
};

const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, loading: true };
    case DATA_RECEIVED:
      return { ...state, loading: false, data: action.data };
    case DATA_RECEIVED_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ reducerData });

export default rootReducer;
