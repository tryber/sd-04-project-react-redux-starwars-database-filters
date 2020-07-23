import apiSw from '../service/ApiRequest';

export const REQUEST_API = 'REQUEST_API';
export const GET_API = 'GET_API';
export const INPUT_NAME = 'INPUT_NAME';
export const VALOR_NUMERICO = 'VALOR_NUMERICO';

// action que recebe valores do imput e trata o data
// export function trataData (coluna, comparacao, numero, data) {
//   return { type: comparacao, coluna, numero, data}
// }

export function valorNumerico(coluna, comparacao, numero) {
  return { type: VALOR_NUMERICO, coluna, comparacao, numero };
}

export function inputName(event) {
  return { type: INPUT_NAME, event };
}

function getApi(data) {
  return { type: GET_API, data };
}

function requestApi() {
  return { type: REQUEST_API };
}

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return apiSw().then((data) => dispatch(getApi(data)));
  };
}
