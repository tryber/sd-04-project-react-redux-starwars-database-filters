import { REQUEST_API, GET_API, INPUT_NAME, VALOR_NUMERICO, TRATA_FILTRO } from '../actions';

const INITIAL_STATE = {
  options: ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  data: {},
  filtros: [],
  isLoading: true,
  filterByName: { name: '' },
  filterByNumericValues: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_API:
      return {
        ...state,
        data: action.data.results,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_NAME:
      return {
        ...state,
        filterByName: { name: action.event.target.value },
      };
    case VALOR_NUMERICO:
      return {
        ...state,
        options: state.options.filter((ele) => ele !== action.coluna),
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.coluna,
            comparison: action.comparacao,
            value: action.numero,
          },
        ],
      };
    case TRATA_FILTRO:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues
        .filter((ele) => ele.column !== action.coluna),
      };
    default:
      return state;
  }
};
