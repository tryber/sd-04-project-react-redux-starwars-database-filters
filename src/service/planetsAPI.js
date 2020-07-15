const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = () => {
  return fetch(PLANETS_API).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};

export default getPlanets;

// const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const getPlanets = () =>
//   fetch(url).then((response) =>
//     response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//   );
// Promise.resolve(data)
// export default getPlanets;
