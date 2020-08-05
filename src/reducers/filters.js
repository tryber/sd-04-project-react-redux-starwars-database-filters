import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, REMOVE_FILTER, ORDER_FILTERS } from '../actions';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};
const getByNumericValues = (state, action) => ({
  ...state,
  filterByNumericValues: [
    ...state.filterByNumericValues,
    {
      column: action.column,
      comparison: action.comparison,
      value: action.value,
    },
  ],
});

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return getByNumericValues(state, action);
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.column,
        ), // filterByNumericValues, sem a  coluna clicada para excluir
      };
    case ORDER_FILTERS:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filters;
