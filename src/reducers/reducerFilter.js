import { ACTION_COLUMN, ACTION_VALUE, ACTION_COMPARISON } from '../actions/actionInput';

const INITIAL_STATE = {
  column: '',
  comparison: '',
  value: '',
};

const reducerFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_COLUMN:
      return {
        ...state,
        column: action.column,
      };
    case ACTION_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case ACTION_COMPARISON:
      return {
        ...state,
        comparison: action.comparison,
      };
    default:
      return state;
  }
};

export default reducerFilter;
