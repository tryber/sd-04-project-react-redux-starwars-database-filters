const API_SW = 'http://swapi-trybe.herokuapp.com/api/planets';

const apiSw = () => {
  return fetch(API_SW).then((data) =>
    data
      .json()
      .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};

export default apiSw;
