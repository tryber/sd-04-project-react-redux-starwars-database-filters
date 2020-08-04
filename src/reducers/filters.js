import { FILTER_BY_NAME, FILTER_BY_NUM_VAL, REMOVE_NUM_FILTER } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filters(
  state = initialState,
  {
    type, name, column, comparison, value, filter,
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
    case REMOVE_NUM_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== filter,
        ),
      };
    default:
      return state;
  }
}

export default filters;
