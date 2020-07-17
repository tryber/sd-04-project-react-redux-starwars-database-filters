const URL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

function getData() {
  return fetch(URL).then((response) => response.json());
}

export default getData;
