import {
  REQUEST_PLANETS,
  REQUEST_PLANETS_SUCCESS,
  REQUEST_PLANETS_FAIL
} from '../actions';

const INITIAL_PLANETS = {
  isFetching: false,
  data: [],
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
        data: [...action.data],
        isFetching: false,
      };
    case REQUEST_PLANETS_FAIL:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }  
    default:
      return state;
  }
};

export default planets;
