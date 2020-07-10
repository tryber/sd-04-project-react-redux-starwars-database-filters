const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanets = () => {
  return fetch(API_URL).then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export default getPlanets;
