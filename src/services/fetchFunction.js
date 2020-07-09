const fecthFunction = () =>
  fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) =>
    response.json().then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    }),
  );

export default fecthFunction;
