const INITIAL_STATE = {
  isLoaded: false,
  items: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_API':
      return {
        ...state,
        isLoaded: false,
      };
    case 'RECEIVE_API':
      return {
        ...state,
        isLoaded: true,
        items: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
