const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const getPlanets = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'REQUESTING_PLANETS':
      return {
        ...state,
        isFetching: true,
      };
    case 'REQUEST_PLANETS_SUCSSES':
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case 'REQUEST_PLANETS_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
