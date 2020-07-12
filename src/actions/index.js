import starWarsAPI from '../services/starWarsAPI';

export const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE';
export const FAILED_RESPONSE = 'FAILED_RESPONSE';

// action para caso de sucesso na resposta da API.
export const successAPIRequest = (results) => ({ type: SUCCESS_RESPONSE, results });

// action para caso de falhe na resposta da API.
export const failedAPIRequest = (message) => ({ type: FAILED_RESPONSE, message });

// thunk para fazer requisições.
export const planetsInfoRequest = () => (dispatch) =>
  starWarsAPI()
    .then((response) => dispatch(successAPIRequest(response.results)))
    .catch((error) => dispatch(failedAPIRequest(error.message)));
