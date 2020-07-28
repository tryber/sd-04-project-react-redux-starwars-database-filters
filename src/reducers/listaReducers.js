const INITIAL_STATE = {
  isFetching: true,
  data: [],
  filterByName: {
    name: '',
  },
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
      };
    case 'CHANGE_TEXT_INPUT':
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    default:
      return { ...state };
  }
}

export default filters;
