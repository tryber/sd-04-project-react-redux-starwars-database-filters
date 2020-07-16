const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = () =>
  fetch(`${URL}`)
    .then((dados) => dados.json())
    .then((response) => response);

export default starWarsAPI;
