const bzunBzun = async (endpoint) => {
  const dataJSON = await fetch(
    `https://swapi-trybe.herokuapp.com/api/${endpoint}`,
  );
  const data = await dataJSON.json();
  return data;
};

export default bzunBzun;
