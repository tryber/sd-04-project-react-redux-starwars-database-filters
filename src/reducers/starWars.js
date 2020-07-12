import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default starWarsReducer;
