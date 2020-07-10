import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/fetchPlanets';

const INICIAL_STATE = {
  isFetching: false,
  data: [],
};

export default function planetsReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case REQUEST_PLANETS_SUCCESS:
      return { ...state, isFetching: false, data: action.results };
    default:
      return state;
  }
}
