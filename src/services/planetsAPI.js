const PLANETS_API_END = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = () =>
  fetch(PLANETS_API_END).then((response) =>
    response
      .json()
      .then((json) => (
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )),
  );

export default planetsAPI;
