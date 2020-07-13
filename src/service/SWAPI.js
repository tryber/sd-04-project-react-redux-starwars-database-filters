const SW_BASE_API = 'https://swapi-trybe.herokuapp.com/api';

export const getPlanetsData = () => (
  fetch(`${SW_BASE_API}/planets/`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
