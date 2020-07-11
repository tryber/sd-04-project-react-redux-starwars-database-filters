import { combineReducers } from 'redux';

import { NAME_TO_FILTER, SET_FILTERED_BY_NAME } from '../actions/filterByName';
import { SET_FILTER_VARIABLES, SET_FILTERED_BY_NUMERIC } from '../actions/filterByNumeric';
import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/fetchPlanets';

const INITIAL_STATE = {
  isFetching: true,
  planetsData: [],
  filteredPlanets: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const applyNumericFilters = (planets, filters) => {
  let filteredPlanets = planets;
  console.log('entrou', planets, filters);
  filters.forEach((filter) => {
    const { column, comparison, value } = filter;
    console.log(column, comparison, value);
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return null;
    });
  });
  return filteredPlanets;
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        planetsData: action.planetsData,
        filteredPlanets: action.planetsData,
        isFetching: false,
      };
    case NAME_TO_FILTER:
      console.log(NAME_TO_FILTER);
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case SET_FILTERED_BY_NAME:
      return {
        ...state,
        filteredPlanets: action.planets,
      };
    case SET_FILTER_VARIABLES: {
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
        // filteredByNumeric: newFilteredPlanets,
      };
    }
    case SET_FILTERED_BY_NUMERIC: {
      const filteredPlanets = applyNumericFilters(
        state.filteredPlanets,
        state.filterByNumericValues,
      );
      return {
        ...state,
        filteredPlanets,
      };
    }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  filters: reducer,
});

export default rootReducer;
