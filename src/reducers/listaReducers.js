const INITIAL_STATE = {
  isFetching: true,
  data: ['3', '4'],
  keys: [],
};


function listaReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
      };
    default:
      return { ...state };
  }
}

export default listaReducers;
