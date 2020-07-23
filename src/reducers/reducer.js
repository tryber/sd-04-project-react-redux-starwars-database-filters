import { REQUEST_API, GET_API, INPUT_NAME, VALOR_NUMERICO } from '../actions';

const INITIAL_STATE = {
  data: {},
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
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.coluna,
            comparison: action.comparacao,
            value: action.numero,
          }
        ]
      }
    // case 'maior':
    //   return {
    //     ...state,
    //     data: action.data.filter(elem => action.numero > elem.action.coluna)
    //   }
    // case 'menor':
    //   return {
    //     ...state,
    //     data: action.data.filter(elem => action.numero < elem.action.coluna)
    //   }
    // case 'igual':
    //   return {
    //     ...state,
    //     data: action.data.filter(elem => action.numero == elem.action.coluna)
    //   }
    default:
      return state;
  }
};
