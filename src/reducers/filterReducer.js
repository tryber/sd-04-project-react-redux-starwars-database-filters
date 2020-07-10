import { NAME_TO_FILTER, SET_FILTERED_BY_NAME } from '../actions/filterByName';
import { SET_FILTER_VARIABLES, SET_FILTERED_BY_NUMERIC } from '../actions/filterByNumeric';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  filteredPlanets: [],
};

export default function filterReducer(state = INITIAL_STATE, action) {
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
        filteredPlanets: action.data,
      };
    case SET_FILTER_VARIABLES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: Number(action.value),
          },
        ],
      };
    case SET_FILTERED_BY_NUMERIC:
      return {
        ...state,
        filteredPlanets: action.data,
      };
    default:
      return state;
  }
}
