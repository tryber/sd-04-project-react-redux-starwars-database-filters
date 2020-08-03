import { IS_LOADED, DATA_RESULTS } from '../actions';

const INITIAL_STATE = {
  isLoaded: false,
  data: [],
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADED:
      return {
        ...state,
        isLoaded: true,
      };
    case DATA_RESULTS:
      return {
        ...state,
        data: [...action.data],
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
