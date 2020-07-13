import { SW_FILTER, SW_FILTER_NUM } from '../actions';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [{ column: '', comparison: '', value: '' }],
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SW_FILTER:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case SW_FILTER_NUM:
      return {
        ...state,
        filterByNumericValues: [
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
          ...state.filterByNumericValues,
        ],
      };

    default:
      return state;
  }
};

export default filterReducer;
