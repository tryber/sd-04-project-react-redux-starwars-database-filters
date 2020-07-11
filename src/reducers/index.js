import { API_REQUISITION, API_REQUISITION_SUCCESS, SEARCH_TEXT, NUMERIC_FILTER } from '../actions';

const INITIAL_STATE = {
  isFetching: true,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [],
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
          filterByName: {
            name: action.name,
          },
        },
      };
    case NUMERIC_FILTER:
      return {
        ...state,
        filters: {
          filterByNumericValues: [
            {
              column: action.event[0].value,
              comparison: action.event[1].value,
              value: action.event[2].value,
            },
          ],
        },
      };
    default:
      return state;
  }
};


export default reducer;
