import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUE,
  REMOVE_NUMERIC_FILTER,
} from '../actions/FiltersActions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = initialState, { type, filter }) => {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: filter },
      };
    case FILTER_BY_NUMERIC_VALUE:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, filter],
      };
    case REMOVE_NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (numericFilter) => numericFilter.colunm !== filter.colunm,
          ),
        ],
      };
    default:
      return state;
  }
};

export default filters;
