import { FILTER_TABLE, FILTER_COMBINER } from '../action/actionFilter';

// const INITIAL_STATE = {
//   text: '',
// };

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
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
    default:
      return state;
  }
};

export default filters;
