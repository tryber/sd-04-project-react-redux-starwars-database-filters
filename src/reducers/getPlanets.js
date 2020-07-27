import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/ApiRequest';

const INITIAL_PLANETS_STATE = {
  isFetching: false,
  planets: [],
};

const getPlanets = (state = INITIAL_PLANETS_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state, planets: action.data, isFetching: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
