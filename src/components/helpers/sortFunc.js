const numColumns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const orderAscNumValues = (planets, column) =>
  planets.sort((a, b) => Number(a[column]) - Number(b[column]));

// const orderAscStringValues = (planets) => planets.sort();

const orderAscStringValues = (planets, column) =>
  planets.sort((a, b) => {
    if (a[column] < b[column]) return -1;
    if (a[column] > b[column]) return 1;
    return 0;
  });

const sortFunc = (planets, column, sort) => {
  const lowerCaseColumn = column.toLowerCase();
  let sortedData = numColumns.includes(lowerCaseColumn);
  if (sortedData) {
    sortedData = orderAscNumValues(planets, lowerCaseColumn);
  } else {
    sortedData = orderAscStringValues(planets, lowerCaseColumn);
  }
  if (sort === 'DESC') return sortedData.reverse();

  return sortedData;
};

export default sortFunc;
