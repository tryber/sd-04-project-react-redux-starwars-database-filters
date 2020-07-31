import { FILTER_BY_NAME, FILTER_BY_NUM_VAL } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(
  state = initialState,
  {
    type, name, column, comparison, value,
  },
) {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name },
      };
    case FILTER_BY_NUM_VAL:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column, comparison, value },
        ],
      };
    default:
      return state;
  }
}

export default filters;
