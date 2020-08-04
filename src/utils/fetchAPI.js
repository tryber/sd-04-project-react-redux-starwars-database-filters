function fetchApi() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planetsAPI = fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(`API ERROR: ${error}`));
  return planetsAPI;
}

export default fetchApi;
