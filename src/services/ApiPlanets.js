
const getApi = () => fetch('https://swapi.dev/api/planets/')
  .then((res) => res.json())
  .then((data) => data);


export default getApi;
