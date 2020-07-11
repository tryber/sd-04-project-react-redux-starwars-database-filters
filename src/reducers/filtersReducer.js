import { NAME_TO_FILTER, SET_FILTERED_BY_NAME } from '../actions/filterByName';
import { SET_FILTER_VARIABLES } from '../actions/filterByNumeric';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  filteredPlanets: [],
  filteredByNumeric: [],
};

export default function filtersReducer(state = INITIAL_STATE, action) {
  const applyFilter = (planets, column, comparison, value) => planets
    .filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      return null;
    });

  switch (action.type) {
    case NAME_TO_FILTER:
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
      const newFilteredPlanets = applyFilter(
        state.filteredPlanets,
        action.column,
        action.comparison,
        action.value,
      );
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
        filteredByNumeric: newFilteredPlanets,
      };
    }
    // case SET_FILTERED_BY_NUMERIC:
    //   return {
    //     ...state,
    //     filteredPlanets: newFilteredPlanets,
    //   };
    default:
      return state;
  }
}
