const STARS_BASE_API = 'https://swapi-trybe.herokuapp.com/api/';

export const getCurrentStarsPlanet = (par) =>
  fetch(`${STARS_BASE_API}${par}`)
    .then((response) => response.json())
    .then((json) => json.results);

export default getCurrentStarsPlanet;
