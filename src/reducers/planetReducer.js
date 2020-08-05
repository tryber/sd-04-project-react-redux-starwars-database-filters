const INITIAL_STATE = {
  loading: false,
  data: [],
  filteredData: [],
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PLANETS':
      return { ...state, 
        loading: true };
    case 'SUCCESS_PLANETS':
      return {
        ...state,
        data: [...action.data],
        filteredData: [...action.data],
        loading: false,
      };
    case 'FAILURE_PLANETS':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetReducer;
