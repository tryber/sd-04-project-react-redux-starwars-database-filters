import { DATA_REQUEST, DATA_RECEIVED, DATA_RECEIVED_ERROR } from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: {},
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case DATA_REQUEST:
      return { ...state, loading: true };
    case DATA_RECEIVED:
      return { ...state, loading: false, data: action.value.results };
    case DATA_RECEIVED_ERROR:
      return { ...state, error: action.value };
    default:
      return state;
  }
};
