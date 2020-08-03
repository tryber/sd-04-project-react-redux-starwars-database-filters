const API = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanetsAPI = () => (
  fetch(API)
  .then((response) => response.json()
  )
)

export default getPlanetsAPI;