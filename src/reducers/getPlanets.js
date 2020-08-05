import { REQUESTING_PLANETS, REQUEST_PLANET_FAILURE, REQUEST_PLANET_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};


const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUESTING_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANET_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case REQUEST_PLANET_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
