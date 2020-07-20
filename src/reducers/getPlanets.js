import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/ApiRequest';
import { FILTER_BY_NAME } from '../actions/filters';

const INITIAL_PLANETS_STATE = {
  isFetching: false,
  planets: '',
  filteredPlanets: '',
};

const getPlanets = (state = INITIAL_PLANETS_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return { ...state, planets: action.data, isFetching: false };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredPlanets: state.planets.filter(
          ({ name }) => (name.toLowerCase()).includes(action.name.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};

export default getPlanets;
