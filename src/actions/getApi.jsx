import getPlanets from '../services/API';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';

const requestApi = () => ({
  type: REQUEST_API,
});

const requestApiSucess = ({ results }) => ({
  type: REQUEST_API_SUCESS,
  results,
});

function fetchRequestApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return getPlanets().then((data) => dispatch(requestApiSucess(data)));
  };
}

export default fetchRequestApi;
