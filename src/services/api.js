const getPlanet = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const data = await fetch(URL);
  return data.json();
};

export default getPlanet;
