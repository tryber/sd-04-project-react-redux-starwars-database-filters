const STARS_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getCurrentStarsPlanet = () => fetch(STARS_BASE_API)
  .then((response) => response.json())
  .then((json) => json.results);
