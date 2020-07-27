import getSwapi from './services/swApi';

export const REQUEST_API = 'REQUEST_API';
export const REQUISITION_SUCCESS = 'REQUISITION_SUCCESS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const requestApi = () => ({
  type: REQUEST_API,
});

const receiveData = (data) => ({
  type: REQUISITION_SUCCESS,
  data,
});

export const filterByNameAct = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export function planetsResponseApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return getSwapi().then((planets) => dispatch(receiveData(planets.results)));
  };
}
