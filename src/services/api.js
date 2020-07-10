const STARWARS_BASE_API = 'https://swapi-trybe.herokuapp.com/api';

const api = (endpoint) => (
  fetch(`${STARWARS_BASE_API}/${endpoint}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default api;
