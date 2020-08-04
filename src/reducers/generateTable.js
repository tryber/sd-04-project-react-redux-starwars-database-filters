import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

function generateTable(state = initialState, { type, error, data }) {
  switch (type) {
    case GET_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        data,
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
