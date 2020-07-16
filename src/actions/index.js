import starWarsAPI from '../services/starWarsAPI';

// Variáveis type para identificação do tipo de ação.
export const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE';
export const FAILED_RESPONSE = 'FAILED_RESPONSE';

export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const CHARGE_FILTERS = 'CHARGE_FILTERS';

// action para caso de sucesso na resposta da API.
export const successAPIRequest = (results) => ({ type: SUCCESS_RESPONSE, results });

// action para caso de falhe na resposta da API.
export const failedAPIRequest = (message) => ({ type: FAILED_RESPONSE, message });

// thunk para fazer requisições.
export const planetsInfoRequest = () => (dispatch) =>
  starWarsAPI()
    .then((response) => dispatch(successAPIRequest(response.results)))
    .catch((error) => dispatch(failedAPIRequest(error.message)));

// Função para a onChange da barra de busca.
export const changeSearchTerm = (seacrhTerm) => ({ type: CHANGE_SEARCH, seacrhTerm });

// Função action creator para filtragem por coluna.
export const searchFilter = (numericFilters) => ({
  type: SEARCH_FILTER,
  numericFilters,
});

export const loadElementFilter = (colFilter) => ({ type: CHARGE_FILTERS, colFilter });
