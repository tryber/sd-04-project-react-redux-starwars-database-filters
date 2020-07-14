/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function apiFetch() {
  return fetch(apiURL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
}
