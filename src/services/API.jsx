const API_URL = 'https://swapi-trybe.herokuapp.com/api';

const getPlanets = () => {
  fetch(`${API_URL}/planets`).then((data) =>
    data.json().then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export default getPlanets;
