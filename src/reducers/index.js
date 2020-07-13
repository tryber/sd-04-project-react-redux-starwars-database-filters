import * as actionTypes from '../redux/actions/actionTypes';

const initialState = {
  data: {},
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  },
};

const stateToFilterByNumericValues = (state, action, content) => ({
  ...state,
  filters: {
    ...state.filters,
    filterByNumericValues: [
      ...content(state.filters.filterByNumericValues, action),
    ],
  },
});

const submitFilterContent = (filterState, action) => [
  ...filterState,
  {
    column: action.column,
    comparison: action.comparison,
    value: action.value,
  },
];

const removeFilterContent = (filterState, action) => [
  ...filterState.filter((elem) => elem.column !== action.column),
];

const stateToHandleChange = (state, action) => ({
  ...state,
  filters: {
    ...state.filters,
    filterByName: {
      ...state.filters.filterByName,
      name: action.input,
    },
  },
});

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
        ...stateToHandleChange(state, action),
      };
    case actionTypes.SUBMIT_FILTER:
      action.event.preventDefault();
      return {
        ...stateToFilterByNumericValues(state, action, submitFilterContent),
      };
    case actionTypes.REMOVE_FILTER:
      return {
        ...stateToFilterByNumericValues(state, action, removeFilterContent),
      };
    case actionTypes.SUBMIT_ORDER:
      action.event.preventDefault();
      return {
        ...state,
        filters: {
          ...state.filters,
          order: {
            column: action.column,
            sort: action.sort,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
