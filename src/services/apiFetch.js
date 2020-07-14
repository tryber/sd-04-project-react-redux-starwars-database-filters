const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const apiFetch = () => fetch(url).then((response) => response
  .json()
  .then((planets) => (response.ok ? Promise.resolve(planets) : Promise.reject(planets))));

export default apiFetch;
