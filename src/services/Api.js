const planets = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = () => (
  fetch(planets).then((response) =>
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))
      )
  )
);

// próx passo configurar a store para fazer uso do thunk
// DEPOIS em action a fn actioncreator assíncrona
