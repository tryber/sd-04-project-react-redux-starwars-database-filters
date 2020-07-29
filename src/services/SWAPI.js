// import data from '../testData';
// const SWAPI = data.results;
// const SWAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';
const SWAPI = 'https://swapi.dev/api/planets/';
function getPlanets() {
  return fetch(SWAPI)
    .then((data) => data.json())
    .then((datajson) => Promise.resolve(datajson), (errorMsg) => Promise.reject(errorMsg));
  // return Promise.resolve(SWAPI);
}

export default getPlanets;
