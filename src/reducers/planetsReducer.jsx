import { REQUEST_PLANET, REQUEST_PLANET_SUCCESS, REQUEST_PLANET_FAILURE } from '../actions/index';


const inicialState = {
  isFetching: false,
  data: [],
};

const planetsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case REQUEST_PLANET:
      return { ...state, isFetching: true };
    case REQUEST_PLANET_SUCCESS:
      return {
        ...state,
        data: [action.data],
        isFetching: false,
      };
    case REQUEST_PLANET_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsReducer;
