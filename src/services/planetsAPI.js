const getPlanetsAPI = async () => {
  const URL = 'https://swapi.dev/api/planets';
  const planets = await fetch(URL);
  return planets.json();
};

export default getPlanetsAPI;
