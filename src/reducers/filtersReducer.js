
import { SEARCH_PLANET_NAME, FILTERS_BY, SORT_BY } from '../actions/actionFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filteredData: [],
  filterByNumericValues: [],
  order: {
    column: '',
    sort: '',
  },
  filteredBySort: [],
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
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.values.column,
            comparison: action.values.comparison,
            value: action.values.value,
          },
        ],
      };
    case SORT_BY:
      return {
        ...state,
        filteredData: action.data,
        order: {
          column: action.column,
          sort: action.sort,
        },
      };
    default:
      return state;
  }
}
