import { SEARCH_PLANET_NAME, FILTERS_BY, REMOVE_FILTER } from '../actions/actionFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filteredData: [],
  filterByNumericValues: [],
  // order: {
  //   column: '',
  //   sort: '',
  // },
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_PLANET_NAME:
      return {
        ...state,
        filteredData: action.data,
        filterByName: {
          name: action.name,
        },
      };
    case FILTERS_BY:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.values],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ),
      };
    default:
      return state;
  }
}

// case SORT_BY:
//   return {
//     ...state,
//     filteredData: action.data,
//     order: {
//       column: action.column,
//       sort: action.sort,
//     },
//    }
