const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

export const getPlanets = () => {
  return fetch(API_URL).then((data) => data.json());
};
