const planetsData = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planets = await fetch(URL);
  return planets.json();
};

export default planetsData;
