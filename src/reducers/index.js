import { SUCCESS_RESPONSE, FAILED_RESPONSE, CHANGE_SEARCH, SEARCH_FILTER } from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  filterKeys: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

const planetTableReducer = (state = INITIAL_STATE, action) => {
  const filtros =
    state.filters.filterByNumericValues &&
    state.filters.filterByNumericValues.map((act) => act.column);
  switch (action.type) {
    case SUCCESS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        data: action.results,
        filterKeys: state.filterKeys.filter((filtro) => !filtros.includes(filtro)),
      };
    case FAILED_RESPONSE:
      return { ...state, isFetching: false, error: action.message };
    case CHANGE_SEARCH:
      return {
        ...state,
        filters: { filterByName: { name: action.seacrhTerm } },
      };
    case SEARCH_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [...state.filters.filterByNumericValues, action.numericFilters],
        },
        filterKeys: state.filterKeys.filter((filtro) => filtro !== action.numericFilters.column),
      };
    default:
      return state;
  }
};

export default planetTableReducer;
