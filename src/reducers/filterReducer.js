import { SW_SEARCH, SW_SEARCH_NUM } from '../actions';

const INITIAL_STATE = {
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

function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SW_SEARCH:
      return { ...state, filterByName: { name: action.value } };
    case SW_SEARCH_NUM: {
      const filter = action.value;
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: filter.column, comparison: filter.comparison, value: filter.value },
        ],
        colonumItems: state.colonumItems.map((item) => {
          if (item.name === filter.column) {
            return { name: item.name, available: false };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
}

export default filterReducer;
