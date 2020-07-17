export const initialState = {
  isFetching: false,
  error: false,
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, isFetching: true, error: false };
    case 'REQUEST_SUCCESS':
      return { ...state, data: action.data, isFetching: false };
    case 'REQUEST_FAILURE':
      return { ...state, error: true, isFetching: false };
    case 'FILTER_BY_NAME':
      return { ...state, filters: { filterByName: { name: action.data } } };
    case 'FILTER_BY_NUMERIC':
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [...state.filters.filterByNumericValues, action.data],
        },
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: state.filters.filterByNumericValues.filter(
            (f) => (
              action.filter.column !== f.column &&
              action.filter.comparison !== f.comparison &&
              action.filter.value !== f.value
            ),
          ),
        },
      };
    default:
      return state;
  }
}

export default reducer;
