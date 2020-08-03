const SW_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

// getPlanetsAPI
const getPlanetsData = () => (
  fetch(SW_BASE_API)
    .then((response) => (response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsData;
