import { RESQUEST_API, RESQUEST_API_DATA, RESQUEST_API_ERRO } from '../action';

const INITIAL_STATE = {
  loading: false,
  data: [],
};

const reducerGetApi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESQUEST_API:
      return {
        ...state,
        loading: true,
      };
    case RESQUEST_API_DATA:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case RESQUEST_API_ERRO:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducerGetApi;
