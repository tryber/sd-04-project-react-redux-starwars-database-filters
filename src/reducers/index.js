import { combineReducers } from 'redux';
import { NAME_TO_FILTER, SET_FILTERED_BY_NAME } from '../actions/filterByName';
import {
  SET_FILTER_VARIABLES,
  SET_FILTERED_BY_NUMERIC,
  REMOVE_FILTER,
} from '../actions/filterByNumeric';
import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS } from '../actions/fetchPlanets';
import { SET_ORDER_FILTER, SET_FILTERED_BY_ORDER } from '../actions/filterByOrder';

const INITIAL_STATE = {
  isFetching: true,
  planetsData: [],
  filteredPlanets: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const applyNumericFilters = (planets, filters) => {
  let filteredPlanets = planets;
  filters.forEach((filter) => {
    const { column, comparison, value } = filter;
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return null;
    });
  });
  return filteredPlanets;
};

const notNumbers = ['name', 'climate', 'terrain', 'residents', 'films', 'created', 'edited'];


// const compare = (column, sort = 'ASC') => (a, b) => {
//   const varA = !notNumbers.includes(column) ? Number(a[column]) : a[column];
//   const varB = !notNumbers.includes(column) ? Number(b[column]) : b[column];
//   let comparison = 0;
//   if (varA > varB) {
//     comparison = 1;
//   } else if (varA < varB) {
//     comparison = -1;
//   }
//   const uai = (sort === 'DESC' ? comparison * -1 : comparison);
//   return uai;
// };

const applyOrderFilter = (planets, { column, sort }) => {
  planets.sort(compare(column, sort));
  return planets;
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        planetsData: action.planetsData,
        filteredPlanets: action.planetsData.sort((a, b) => a.name.localeCompare(b.name)),
        isFetching: false,
      };
    case NAME_TO_FILTER:
      return { ...state, filterByName: { name: action.name } };
    case SET_FILTERED_BY_NAME:
      return { ...state, filteredPlanets: action.planets };
    case SET_FILTER_VARIABLES: {
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    }
    case SET_FILTERED_BY_NUMERIC: {
      const planets = state
        .filterByNumericValues.length === 0 ? state.planetsData : state.filteredPlanets;
      const filteredPlanets = applyNumericFilters(planets, state.filterByNumericValues);
      return { ...state, filteredPlanets };
    }
    case REMOVE_FILTER: {
      const newFilteredByNumericValues = state.filterByNumericValues.filter(
        ({ column }) => column !== action.filterToRemove.column,
      );
      return { ...state, filterByNumericValues: newFilteredByNumericValues };
    }
    // case SET_ORDER_FILTER: {
    //   return {
    //     ...state,
    //     order: {
    //       column: action.column,
    //       sort: action.sortKey,
    //     },
    //   };
    // }
    // case SET_FILTERED_BY_ORDER: {
    //   const planets = [...state.filteredPlanets];
    //   const filteredPlanets = applyOrderFilter(planets, state.order);
    //   return {
    //     ...state,
    //     filteredPlanets,
    //   };
    // }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  filters: reducer,
});

export default rootReducer;
