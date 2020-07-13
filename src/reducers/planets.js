import {
  REQUEST_PLANETS,
  REQUEST_PLANETS_SUCCESS,
} from '../actions';

const INITIAL_PLANETS = {
  isFetching: false,
  data: {},
};

const planets = (state = INITIAL_PLANETS, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.planets,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default planets;
