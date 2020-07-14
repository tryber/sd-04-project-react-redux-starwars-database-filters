import getCurrentAPI from '../service/api';

export const RESQUEST_API = 'RESQUEST_API';
export const RESQUEST_API_ERRO = 'RESQUEST_API_ERRO';
export const RESQUEST_API_DATA = 'RESQUEST_API_DATA';

export const requestApi = () => ({
  type: RESQUEST_API,
});

export const requestDataApi = (data) => ({
  type: RESQUEST_API_DATA,
  data,
});

export const requestDataApiErro = (erro) => ({
  type: RESQUEST_API_ERRO,
  erro,
});

export function fetchGetApi() {
  return (dispatch) => {
    dispatch(requestApi());

    return getCurrentAPI().then(
      (data) => dispatch(requestDataApi(data.results)),
      (erro) => dispatch(requestDataApiErro(erro.message)),
    );
  };
}
