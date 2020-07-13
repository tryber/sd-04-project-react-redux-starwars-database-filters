import getPlanets from '../services/Api';

export const REQUEST_PLANET = 'REQUEST_PLANET';
export const REQUEST_PLANET_SUCCESS = 'REQUEST_PLANET_SUCCESS';
export const REQUEST_PLANET_FAILURE = 'REQUEST_PLANET_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

// fn action para indicar o envio da requisição p/ buscar os planets
const requestPlanets = () => ({
  type: REQUEST_PLANET,
});

// fn action indicando a requisição finalizada com sucesso
// fn recebe como param. a resposta da api
const sucessPlanets = ({ results }) => ({
  type: REQUEST_PLANET_SUCCESS,
  data: results,
});

// fn action indicando a requisição finalizada sem sucesso
const failurePlanets = (error) => ({
  type: REQUEST_PLANET_FAILURE,
  error,
});

// fn actioncreation assí.
export function requestFetch() {
  return (dispatch) => { // fn retornada é a thunk, ela q é interceptada
    dispatch(requestPlanets());
    return getPlanets().then( // então uma vez finalizado tenho: sucesso ou falha!
      (json) => dispatch(sucessPlanets(json)),
      (error) => dispatch(failurePlanets(error)),
    );
  };
}
// depois de estruturar a requisição ---> reducer

export const filterByName = (value) => ({
  type: FILTER_BY_NAME,
  value,
});

export const filterByNumbers = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});
