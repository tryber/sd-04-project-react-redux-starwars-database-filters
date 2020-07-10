import { DATA_FILTER, INPUT_FILTER } from '../actions/filterPlanets';
import { SELECT_FILTER } from '../actions/filterSelectOptions';
// {
//   column: 'population',
//   comparison: 'maior que',
//   value: 0,
// },

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  filteredData: [],
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };

    case DATA_FILTER:
      return {
        ...state,
        filteredData: action.data,
      };
    case SELECT_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          {
            column: action.column,
            comparison: action.comparison,
            value: Number(action.value),
          },
        ],
      };
    default:
      return state;
  }
}
