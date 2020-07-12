import { UPDATE_ORDER } from '../actions';

const initialState = {
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export default (state = initialState, { type, order }) => {
  switch (type) {
    case UPDATE_ORDER:
      return order;
    default:
      return state;
  }
};
