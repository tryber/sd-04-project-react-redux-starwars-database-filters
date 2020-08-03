const getPlanetsAPI = () => fetch('https://swapi.dev/api/planets/')
  .then((data) => data.json())
  .then((data) => Promise.resolve(data));

export default getPlanetsAPI;
