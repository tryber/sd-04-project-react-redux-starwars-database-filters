const getSwapi = () =>
  fetch('https://swapi.dev/api/planets/')
    .then((res) => res.json())
    .then((data) => Promise.resolve(data));

export default getSwapi;
