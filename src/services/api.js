const STARWARS_BASE_API = 'https://cors-anywhere.herokuapp.com/https://swapi-trybe.herokuapp.com/api/planets';

const api = () => (
  fetch(`${STARWARS_BASE_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default api;
