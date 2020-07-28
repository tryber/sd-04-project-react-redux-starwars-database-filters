import { FILTER_BY_NAME, ORDER_COLUMN } from '../action/index';

const INITIAL_STATE = {
  filterByName: { name: '' },
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filters = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } }
    case ORDER_COLUMN:
      return { ...state, order: { column: action.column, sort: action.sort } }
    default:
      return state;
  }
}

export default filters;
