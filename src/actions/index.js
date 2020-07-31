import getSwapi from '../services/swApi';

export const REQUEST_API = 'REQUEST_API';
export const REQUISITION_SUCCESS = 'REQUISITION_SUCCESS';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const requestApi = () => ({
  type: REQUEST_API,
});

const receiveData = (data) => ({
  type: REQUISITION_SUCCESS,
  data,
});

const filterByNameAct = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

const removeFilter = (willRemove) => ({
  type: REMOVE_FILTER,
  willRemove,
})

function planetsResponseApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return getSwapi().then((planets) => dispatch(receiveData(planets.results)));
  };
}



export { filterByNameAct, planetsResponseApi, filterByNumericValues, removeFilter };
