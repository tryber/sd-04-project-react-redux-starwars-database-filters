import { SEARCH_BAR } from '../actions/searchBarActions';
import { NUMERICAL_FILTER } from '../actions/filterActions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  colonumItems: [
    { name: 'Coluna', available: true },
    { name: 'population', available: true },
    { name: 'orbital_period', available: true },
    { name: 'diameter', available: true },
    { name: 'rotation_period', available: true },
    { name: 'surface_water', available: true },
  ],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BAR:
      console.log('test searchbarReducer', action);
      return {
        ...state, filterByName: { name: action.value },
      };
    case NUMERICAL_FILTER: {
      const filter = action.value;
      console.log('reducer Numerical Filter', action);
      console.log('Value ?', filter.column);
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: filter.column, comparison: filter.comparison, value: filter.value },
        ],
        colonumItems: state.colonumItems.map((item) => {
          if (item.name === filter.column) {
            return {
              name: item.name, available: false };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
}

export default filters;
