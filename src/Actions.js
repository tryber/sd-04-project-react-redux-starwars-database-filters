import getSwapi from './services/swApi';

export const REQUEST_API = 'REQUEST_API';
export const REQUISITION_SUCCESS = 'REQUISITION_SUCCESS';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveData = (data) => ({
  type: REQUISITION_SUCCESS,
  data,
});

export function planetsResponseApi() {
  console.log('funciona planetsResponse');
  return (dispatch) => {
    dispatch(requestApi());
    return getSwapi().then((planets) => dispatch(receiveData(planets.results)));
  };
}
