import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/ApiRequest';
import { FILTER_BY_NAME, FILTER_BY_NUMBER } from '../actions/filters';
import numericFilter from '../helpers/numericFilter';

const INITIAL_PLANETS_STATE = {
  isFetching: false,
  planets: [],
  filteredPlanets: [],
};

const getPlanets = (state = INITIAL_PLANETS_STATE, action) => {
  const planetsCTS = state.filteredPlanets.length === 0 ? state.planets : state.filteredPlanets;
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state, planets: action.data, isFetching: false,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        filteredPlanets: planetsCTS.filter(
          ({ name }) => (name.toLowerCase()).includes(action.name.toLowerCase()),
        ),
      };
    case FILTER_BY_NUMBER:

      return {
        ...state,
        filteredPlanets: numericFilter(planetsCTS, action.filter),
      };
    default:
      return state;
  }
};

export default getPlanets;
