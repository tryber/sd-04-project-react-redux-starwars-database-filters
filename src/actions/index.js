import getPlanets from '../services/Api';

export const REQUEST_PLANET = 'REQUEST_PLANET';
export const REQUEST_PLANET_SUCCESS = 'REQUEST_PLANET_SUCCESS';
export const REQUEST_PLANET_FAILURE = 'REQUEST_PLANET_FAILURE';

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
