const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

const apiPlanets = () =>
  fetch(api)
    .then((response) => response.json()
    .then((json) => (
        response.ok ? Promise.resolve(json) : PromiseRejectionEvent.reject(json)
      )),
    );

export default apiPlanets;
