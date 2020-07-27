const getSwapi = () => 
  fetch('http://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then((data) => Promise.resolve(data));


export default getSwapi;
