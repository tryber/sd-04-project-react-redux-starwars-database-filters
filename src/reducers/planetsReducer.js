import { REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS, REQUEST_PLANETS_ERROR } from '../actions';

const initialState = {
  isLoading: false,
  data: [],
};

export default function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case REQUEST_PLANETS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
