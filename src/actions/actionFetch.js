import getPlanets from '../services/getPlanetsAPI';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';

export const requestPlanets = () => ({
  type: REQUEST_API,
  isLoading: true,
});

export const requestPlanetsSucess = (data) => ({
  type: REQUEST_API_SUCESS,
  isLoading: false,
  data,
});

export function requestFetchApi() {
  return (dispatch) => {
    dispatch(requestPlanets());
    getPlanets().then((data) => dispatch(requestPlanetsSucess(data)));
  };
}
