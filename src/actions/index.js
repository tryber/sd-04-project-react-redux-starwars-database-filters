import getPlanets from '../services/API';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
export const SEARCH_BAR_CHANGE = 'SEARCH_BAR_CHANGE';

const requestApi = () => ({
  type: REQUEST_API,
});

const requestApiSucess = (data) => ({
  type: REQUEST_API_SUCESS,
  data,
});

function fetchRequestApi() {
  return (dispatch) => {
    dispatch(requestApi());
    getPlanets().then((data) => dispatch(requestApiSucess(data)));
  };
}

export default fetchRequestApi;
