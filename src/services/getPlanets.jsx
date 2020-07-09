const getPlanets = async () => {
  const fetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJson = fetch.json();
  console.log(responseJson);
  return responseJson;
};

export default getPlanets;
