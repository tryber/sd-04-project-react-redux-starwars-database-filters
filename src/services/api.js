const getPlanet = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  console.log(dataJSON.results);
  return dataJSON.results;
};

export default getPlanet;
