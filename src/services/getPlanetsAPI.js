const API = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanetsAPI = () => (
  fetch(API)
  .then((response) => response.json().then(
    (data) => (
      response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ),
  )
);

export default getPlanetsAPI;
