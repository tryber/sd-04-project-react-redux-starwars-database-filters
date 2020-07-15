const initialState = {
  isFetching: false,
  error: false,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, isFetching: true, error: false };
    case 'REQUEST_SUCCESS':
      return { ...state, data: action.data, isFetching: false };
    case 'REQUEST_FAILURE':
      return { ...state, error: true, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
