const getPlanet = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const data = await fetch(URL);
  console.log(data);
  return data.json();
};

export default getPlanet;
