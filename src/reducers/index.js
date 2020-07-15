// import { combineReducers } from 'redux';
import { REQUEST_SWAPI, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions';

const INITIAL_STATE = {
  data: [],
  fetching: false,
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SWAPI:
      return {
        ...state,
        fetching: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false,
      };

    case REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };

    default:
      return state;
  }
};

// const rootReducer = combineReducers({});

// export default rootReducer;
export default reducer;
