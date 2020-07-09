import { REQUEST_API, REQUEST_API_SUCESS } from '../actions/getApi';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

export const reducerRequestApi = (state = INITIAL_STATE, action) => {
  console.log('action recebida:', action);
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
