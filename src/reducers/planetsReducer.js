import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/fetchPlanets';

const INICIAL_STATE = {
  isFetching: true,
  data: [],
};

export default function planetsReducer(state = INICIAL_STATE, { type, results }) {
  switch (type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case REQUEST_PLANETS_SUCCESS:
      return { ...state, isFetching: false, data: results };
    default:
      return state;
  }
}
