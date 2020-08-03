const INITIAL_STATE = {
  order: null,
};

function OrderFilterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SUBMIT_RADIO':
      return { ...state, order: { sort: action.order, column: action.column } };
    default:
      return { ...state };
  }
}

export default OrderFilterReducer;
