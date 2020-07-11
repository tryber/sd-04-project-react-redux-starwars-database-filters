import { FILTERED_NAME, FILTERED_NUMERIC } from '../actions/types';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterNumericValues: [
    {
      column: 'population',
      comparison: 'Maior que',
      value: '5',
    },
  ],
  filterOrder: {},
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERED_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTERED_NUMERIC:
      return {
        ...state,
        filterNumericValues: [
          ...state.filterNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    default:
      return state;
  }
};

export default filters;
