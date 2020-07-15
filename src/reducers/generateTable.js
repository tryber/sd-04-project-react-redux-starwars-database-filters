import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

function generateTable(state = initialState, { type, payload, error }) {
  switch (type) {
    case GET_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        data: payload.results,
        loading: false,
      };
    case GET_PLANETS_FAILURE:
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
