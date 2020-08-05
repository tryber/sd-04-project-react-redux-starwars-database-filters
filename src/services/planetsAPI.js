const API = 'https://swapi-trybe.herokuapp.com/api/planets';

const planetsAPI = () => console.log(API);
fetch(API).then((response) =>
  response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
);

export default planetsAPI;
