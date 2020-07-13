import { NUMERICAL_FILTER, DELETE_FILTER } from '../actions/filterActions';
import { SEARCH_BAR } from '../actions/searchBarActions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BAR:
      return {
        ...state,
        filterByName: { name: action.value },
      };
    case DELETE_FILTER:
      console.log('Delete Reducer_value', action.index);
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter((filter, index) => index !== action.index),
      };

      // return {
      //   ...state,
      //   items: state.items.filter((item, index) => index !== action.payload)
      // }

    case NUMERICAL_FILTER: {
      const filter = action.value;
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: filter.column,
            comparison: filter.comparison,
            value: filter.value,
          },
        ],
      };
    }
    default:
      return state;
  }
}

export default filters;

// colonumItems: state.colonumItems.map((item) => {
//   if (item.name === filter.column) {
//     return {
//       name: item.name,
//       available: false,
//     };
//   }
//   return item;
// }),
// colonumItems: [
//   { name: 'Coluna', available: true },
//   { name: 'population', available: true },
//   { name: 'orbital_period', available: true },
//   { name: 'diameter', available: true },
//   { name: 'rotation_period', available: true },
//   { name: 'surface_water', available: true },
// ],
