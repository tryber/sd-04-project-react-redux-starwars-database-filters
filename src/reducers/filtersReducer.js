import { UPDATE_FILTER, UPDATE_NUMERIC_FILTER, REMOVE_NUMERIC_FILTER, UPDATE_ORDER } from '../actions';

const initialState = {
  filterByName: {
    name: null,
  },
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  filterByNumericValues: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, ...action.filters };
    case UPDATE_NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.numericFilter],
      };
    case REMOVE_NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (f) => f.column !== action.filterColumn,
        ),
      };
    case UPDATE_ORDER:
      return { ...state, order: action.order };
    default:
      return state;
  }
};
