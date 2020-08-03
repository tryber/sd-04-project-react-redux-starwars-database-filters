import {
  FILTER_TABLE,
  FILTER_COMBINER,
  REMOVE_FILTER,
  SORT_FILTER,
} from '../action/actionFilter';

// const INITIAL_STATE = {
//   text: '',
// };

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_TABLE:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
        //text: action.text,
      };
    case FILTER_COMBINER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.compar,
            value: action.number,
          },
        ],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (obj) => obj !== action.obj
        ),
      };
    case SORT_FILTER:
      return {
        ...state,
        order: {
          column: action.column,
          sort: action.sort,
        },
      };
    default:
      return state;
  }
};

export default filters;
