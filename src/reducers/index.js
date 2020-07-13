import { REQUEST_API, REQUEST_API_SUCESS, SEARCH_BAR_CHANGE } from '../actions';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const reducerRequestApi = (state = INITIAL_STATE, action) => {
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
        data: action.data,
      };
    case SEARCH_BAR_CHANGE:
      return {
        ...state,
        filters: { ...state.filters, filterByName: { name: action.inputText.value } },
      };
    default:
      return state;
  }
};

export default reducerRequestApi;
