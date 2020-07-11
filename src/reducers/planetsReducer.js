import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/fetchPlanets';

const INITIAL_STATE = {
  isFetching: true,
  planetsData: [],
};

export default function planetsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        planetsData: action.planetsData,
        isFetching: false,
      };
    default:
      return state;
  }
}
