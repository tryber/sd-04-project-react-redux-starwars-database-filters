import { REQUESTING_PLANETS, REQUEST_PLANETS_ERROR, REQUEST_PLANETS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  data: [],
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUESTING_PLANETS:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isLoading: false,
      };
    case REQUEST_PLANETS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
