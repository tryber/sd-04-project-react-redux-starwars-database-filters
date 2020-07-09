const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function apiCall() {
  return fetch(url).then((response) =>
    response
      .json()
      .then((planets) => (planets.ok ? Promise.resolve(planets) : Promise.reject(planets))),
  );
}
