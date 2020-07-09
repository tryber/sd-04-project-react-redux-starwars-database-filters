const planetsAPI = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

export default function getPlanets() {
  return fetch(planetsAPI).then((response) => response
    .json());
}

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       // se for assincrono executa a funcao
//       return action(dispatch, getState, extraArgument);
//     }

//     return next(action);
//     // Joga pro reducer ja que nao é assincrono
//   };
// }
