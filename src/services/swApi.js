/* export default async function getSwapi() {
  await fetch('http://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then((data) => data[0]);
}
 */
/* export default async function getSwapi() {
  await fetch('http://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then((data) => data[0] || console.log(data.results[0]));
}
 */
export default async function getSwapi() {
  const planets = await fetch('http://swapi-trybe.herokuapp.com/api/planets/');
  const json = await planets.json();
  const planetList = json.results;
  console.log(planetList);
  return planetList;
}
