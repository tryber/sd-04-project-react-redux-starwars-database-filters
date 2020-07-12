const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/';

const fetchSWAPI = (endPoint) =>
  fetch(`${BASE_URL}${endPoint}`)
    .then((response) => response.json())
    .then((json) => json.results);

export default fetchSWAPI;
