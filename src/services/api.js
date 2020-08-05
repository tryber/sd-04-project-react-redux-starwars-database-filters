export default async function getPlanets() {
  const response = await fetch('https://swapi.dev/api/planets')
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject('Uh-oh!'));
  return data;
}
