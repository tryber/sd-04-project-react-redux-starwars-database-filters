const URL_PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets';

export const getPlanetsAPI = () =>
  fetch(URL_PLANETS_API).then((response) =>
    response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
