import { API_REQUISITION, API_REQUISITION_SUCCESS, SEARCH_TEXT } from '../actions';

const INITIAL_STATE = {
  isFetching: true,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log('received action:', action);
  switch (action.type) {
    case API_REQUISITION:
      return {
        ...state,
        isFetching: true,
      };
    case API_REQUISITION_SUCCESS:
      return {
        ...state,
        data: action.dados,
        isFetching: false,
      };
    case SEARCH_TEXT:
      return {
        ...state,
        filters: {
          filtersByName: { name: action.name },
        },
      };
    default:
      return state;
  }
};

export default reducer;
