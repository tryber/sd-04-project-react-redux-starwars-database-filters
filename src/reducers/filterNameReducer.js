import { FILTER_NAME, FILTER_NUMBER } from '../actions/filterPlanetByName';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  columns: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  comparisons: ['maior que', 'igual a', 'menor que'],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case FILTER_NUMBER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.filterData.column,
            comparison: action.filterData.comparison,
            value: action.filterData.value,
          },
        ],
      };
    default:
      return state;
  }
};

export default filters;
