
import { SEARCH_PLANET_NAME, FILTERS_BY, CHANGE_DATA_FILTERED } from '../actions/actionFilter';

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
            column: action.values.column,
            comparison: action.values.comparison,
            value: action.values.value,
          },
        ],
      };
    case CHANGE_DATA_FILTERED:
      return {
        ...state,
        filteredData: action.data,
      };
    default:
      return state;
  }
}
