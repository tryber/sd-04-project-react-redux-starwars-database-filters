import { REQUEST_API, REQUEST_API_SUCESS } from '../actions/getApi';

const INITIAL_STATE = {
  data: [{ id: '2', name: 'caio' }],
  isLoading: false,
};

const reducerRequestApi = (state = INITIAL_STATE, action) => {
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
        data: action.results,
      };
    default:
      return state;
  }
};

export default reducerRequestApi;
