import {
  REQUEST_SW_PLANETS,
  REQUEST_SW_PLANETS_SUCCESS,
} from '../actions';

const INITIAL_SW_PLANETS = {
  isFetching: false,
  data: [],
};

const swAPI = (state = INITIAL_SW_PLANETS, action) => {
  switch (action.type) {
    case REQUEST_SW_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SW_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.results,
      };
    default:
      return state;
  }
};

export default swAPI;
