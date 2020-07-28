import { FILTER_BY_NAME } from '../action/index';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
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
    default:
      return state;
  }
}

export default filters;
