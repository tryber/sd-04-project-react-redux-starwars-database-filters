
import { SEARCH_PLANET_NAME, FILTER_BY } from '../actions/actionFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filteredData: [],
  filterByNumericValues: [],
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
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case CHANGE_DATA_FILTERED:
      retun {
        ...state,
        filteredData: action.data,
      }
    default:
      return state;
  }
}
