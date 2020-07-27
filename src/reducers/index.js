const INITIAL_STATE = {
  isFetching: false,
};

function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'SUCCESS':
      return { ...state, isFetching: false, data: action.data };
    default:
      return { ...state };
  }
}

export default listaReducers;
