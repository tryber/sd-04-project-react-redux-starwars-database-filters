import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS, REQUEST_PLANETS_FAILURE } from '../action/index';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  filters: {
    filterByName: { name: '' },
  }
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case REQUEST_PLANETS_SUCCESS:
      return { ...state, data: [...action.data], isFetching: false };
    case REQUEST_PLANETS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default getPlanets;
