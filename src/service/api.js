const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getCurrentAPI = () =>
  fetch(`${API}`).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default getCurrentAPI;
