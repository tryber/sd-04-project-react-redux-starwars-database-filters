export default function apiRequest(endpoint) {
  return fetch(
    `https://swapi-trybe.herokuapp.com/api/${endpoint}/`,
  ).then(response => response
    .json()
    .then(
      data => (response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ));
}
