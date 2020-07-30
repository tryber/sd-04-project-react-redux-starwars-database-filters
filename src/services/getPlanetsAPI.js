const API = 'https://swapi.dev/api';

const getPlanet = () =>
  fetch(`${API}/planets`).then((response) =>
    response
      .json()
      .then((data) =>
        response.ok ? Promise.resolve(data) : Promise.reject(data)
      )
  );

export default getPlanet;
