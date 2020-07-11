export default function requestFromApi(request) {
  return fetch(`https://swapi-trybe.herokuapp.com/api/${request}`)
    .then((response) => response.json());
}
