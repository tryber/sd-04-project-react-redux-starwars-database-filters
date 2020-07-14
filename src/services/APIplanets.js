const INITIAL_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getSWAPI = () => (
  fetch(`${INITIAL_URL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getSWAPI;
