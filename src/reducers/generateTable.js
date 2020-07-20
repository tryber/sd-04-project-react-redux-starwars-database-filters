import {
  REQUEST_PLANETS,
  PLANETS_SUCCESS,
  PLANETS_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

function generateTable(state = initialState, { type, payload, error }) {
  switch (type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        loading: true,
      };
    case PLANETS_SUCCESS:
      return {
        ...state,
        data: payload.results,
        loading: false,
      };
    case PLANETS_FAILURE:
      return {
        ...state,
        data: [],
        error,
        loading: false,
      };
    default:
      return state;
  }
}

export default generateTable;
