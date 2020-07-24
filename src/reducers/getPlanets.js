import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/ApiRequest';
import { FILTER_BY_NAME, FILTER_BY_NUMBER } from '../actions/filters';
import numericFilter from '../helpers/numericFilter';

const INITIAL_PLANETS_STATE = {
  isFetching: false,
  planets: [],
  filteredPlanets: [],
};

const getPlanets = (state = INITIAL_PLANETS_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state, planets: action.data, filteredPlanets: action.data, isFetching: false,
      };
    case FILTER_BY_NAME:
      console.log(state.filteredPlanets);
      return {
        ...state,
        filteredPlanets: state.planets.filter(
          ({ name }) => (name.toLowerCase()).includes(action.name.toLowerCase()),
        ),
      };
    case FILTER_BY_NUMBER:
      console.log(state.filteredPlanets);
      return {
        ...state,
        filteredPlanets: numericFilter(state.filteredPlanets, action.filter),
      };
    default:
      return state;
  }
};

export default getPlanets;
