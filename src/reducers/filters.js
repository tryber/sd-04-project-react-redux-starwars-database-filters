import * as searchFilter from '../actions/filters';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

function filters(state = initialState, action) {
  switch (action.type) {
    case searchFilter.SEARCH:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: action.payload },
      };
    case searchFilter.NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.payload],
      };
    case searchFilter.REMOVE_NUMERIC_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (item, index) => index !== action.payload,
        ),
      };
    case searchFilter.ORDER_FILTER:
      return {
        ...state,
        order: {
          ...state.order,
          column: action.payload.column,
          sort: action.payload.sort,
        },
      };
    default:
      return state;
  }
}

export default filters;
