export default function getPlanets() {
  const URL_PLANETS = 'https://swapi.dev/api/planets';
  fetch(URL_PLANETS)
    .then(planets => planets)
    .catch(error => { throw error });
}
