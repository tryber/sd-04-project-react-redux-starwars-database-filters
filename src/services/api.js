// 1) realizar uma requisição para o endpoint disponibilizado.

const URL_BASE = 'https://swapi-trybe.herokuapp.com/api';

const swApi = () =>
  fetch(`${URL_BASE}/planets/`).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default swApi;
