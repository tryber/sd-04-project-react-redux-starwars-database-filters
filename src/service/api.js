// const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const API = 'https://swapi.dev/api/planets/';

const getCurrentAPI = () =>
  fetch(`${API}`).then((data) =>
    data
      .json()
      .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default getCurrentAPI;
