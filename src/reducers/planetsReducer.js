import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

export default function planetsReducer(state = INITIAL_STATE, action) {
  console.log(action);
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
}
