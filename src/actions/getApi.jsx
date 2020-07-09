import getPlanets from '../services/getPlanets';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';

const requestApi = () => ({
  type: REQUEST_API,
});

const requestApiSucess = (data) => ({
  type: REQUEST_API_SUCESS,
  data,
});

function fetchRequestApi(dispatch) {
  return (dispatch) => {
    dispatch(requestApi());
    return getPlanets().then((data) => dispatch(requestApiSucess(data)));
  };
}

export default fetchRequestApi;
