import * as actionTypes from '../redux/actions/actionTypes';

const initialState = {
  data: {},
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_DATA:
      return { ...state };
    case actionTypes.RECEIVED_DATA:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.HANDLE_NAME_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: {
            ...state.filters.filterByName,
            name: action.input,
          },
        },
      };
    case actionTypes.HANDLE_CHANGE_NUMERIC:
      return {
        ...state,
        numericFilterInput: {
          ...state.numericFilterInput,
          [action.field]: action.value,
        },
      };
    case actionTypes.SUBMIT_FILTER:
      action.event.preventDefault();
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues,
            {
              column: action.column,
              comparison: action.comparison,
              value: action.value,
            },
          ],
        },
      };
    case actionTypes.REMOVE_FILTER:
      console.log(action.column);
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues.filter(
              (elem) => elem.column !== action.column,
            ),
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
