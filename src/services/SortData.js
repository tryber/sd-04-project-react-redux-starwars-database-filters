const sortData = (planets, orderColumn, order) => {
  const filterColumn = orderColumn.toLowerCase();
  if (isNaN(planets[0][filterColumn])) {
    planets.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
  } else {
    planets.sort((a, b) => a[filterColumn] - b[filterColumn]);
  }
  if (order === 'DESC') planets.reverse();
  return planets;
};

export default sortData;
