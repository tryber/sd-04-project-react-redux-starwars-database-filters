import { DATA_REQUEST, DATA_RECEIVED, DATA_RECEIVED_ERROR } from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: {},
};

const reducerData = (state = initialState, action) => {
  // const reducerData1 = { ...state.reducerData, loading: true };
  // const reducerData2 = { ...state.reducerData, loading: false, data: action.value };
  // const reducerData3 = { ...state.reducerData, error: action.value };

  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, loading: true };
    // return { ...state, reducerData: reducerData1 };
    case DATA_RECEIVED:
      return { ...state, loading: false, data: action.value };
    // return { ...state, reducerData: reducerData2 };
    case DATA_RECEIVED_ERROR:
      return { ...state, error: action.value };
    // return { ...state, reducerData: reducerData3 };
    default:
      return state;
  }
};

export default reducerData;
