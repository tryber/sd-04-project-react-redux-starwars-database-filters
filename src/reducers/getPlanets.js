import {
  REQUESTING_PLANETS,
  SUCESS_PLANETS,
  FAILURE_PLANETS,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

export const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUESTING_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case SUCESS_PLANETS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case FAILURE_PLANETS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getPlanets;
