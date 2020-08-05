import { BUSCAR_NOME, BUSCA_VALORES, REMOVE_VALORES } from '../actions/filtersActions';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  options: [
    'Coluna',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSCAR_NOME:
      return {
        ...state,
        filterByName: { name: action.digitado },
      };
    case BUSCA_VALORES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
        options: action.options,
      };
    case REMOVE_VALORES:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.valor,
        ),
        options: [...state.options, action.valor],
      };
    default:
      return state;
  }
};

export default filter;
