import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUE } from '../actions/FiltersActions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    { column: 'surface_water', comparison: 'menor que', value: '40' },
    { column: 'diameter', comparison: 'maior que', value: '8900' },
    { column: 'population', comparison: 'igual a', value: '200000' },
  ],
  columnFilterOptions: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

const filters = (state = initialState, { type, filter }) => {
  switch (type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: filter },
      };
    case FILTER_BY_NUMERIC_VALUE:
      return {
        ...state,
        columnFilterOptions: [
          ...state.columnFilterOptions.filter((option) => option.key !== filter.column),
        ],
        filterByNumericValues: [...state.filterByNumericValues, filter],
      };
    default:
      return state;
  }
};

export default filters;
