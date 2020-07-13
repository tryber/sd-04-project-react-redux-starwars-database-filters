const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/';

const fetchSWAPI = (endpoint) => fetch(`${BASE_URL}${endpoint}`)
  .then((response) => response.json())
  .then((json) => json.results);

export default fetchSWAPI;
