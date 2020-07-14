import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCCESS,
  PLANET_INFO_REQUEST_FAILURE,
} from '../actions/actions';

const initialState = {
  data: [],
  loading: false,
};

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_INFORMATION:
      return { ...state, loading: true };
    case PLANET_INFO_REQUEST_SUCCESS:
      return { ...state, loading: false, data: action.data };
    default:
      return state;
    case PLANET_INFO_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.data };
  }
};

export default swapiReducer;
