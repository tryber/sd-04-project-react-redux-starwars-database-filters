const INITIAL_STATE = {
  isFetching: true,
  data: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_API':
      return { ...state, isFetching: true };
    case 'SUCCESS':
      return { ...state, isFetching: false, data: action.data.results };
    case 'CHANGE_TEXT_INPUT':
      return { ...state, filterByName: { name: action.value } };
    case 'CHANGE_TEXT_INPUT_COMPARISOR':
      return {
        ...state,
        filterByNumericValues: { ...state.filterByNumericValues, [action.name]: action.value },
      };
    case 'COMPARISOR':
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter((c) => c.column !== action.c),
      };
    case 'SUBMIT_RADIO':
      return { ...state, order: { sort: action.order, column: action.column } };
    default:
      return { ...state };
  }
}

export default filters;
