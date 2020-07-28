const API = 'https://swapi-trybe.herokuapp.com/api';

const getPlanet = () => fetch(`${API}/planets`)
  .then(
    (response) => response
      .json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default getPlanet;