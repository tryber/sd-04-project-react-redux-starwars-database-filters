const getPlanetsAPI = (token) => fetch('http://swapi-trybe.herokuapp.com/api/planets/')
  .then((data) => data.json())
  .then((data) => Promise.resolve(data));

export default getPlanetsAPI;
