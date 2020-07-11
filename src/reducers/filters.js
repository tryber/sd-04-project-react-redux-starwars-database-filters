import { FILTER_BY_NAME, FILTER_BUTTON, SAVE_FILTER } from '../actions';

const INITIAL_STATE = {
  actualFilter: {
    column: '',
    comparison: '',
    value: '',
  },
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BUTTON:
      return {
        ...state,
        actualFilter: INITIAL_STATE.actualFilter,
        filterByName: { name: '' },
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case SAVE_FILTER:
      return {
        ...state,
        filterByName: { name: '' },
        actualFilter: { ...state.actualFilter, [action.name]: action.value },
      };
    default:
      return state;
  }
};

export default filters;
