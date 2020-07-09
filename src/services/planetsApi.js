const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  return fetch(API).then((response) => response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
}
