import numericFilter from './numericFilter';

const sortPlanet = (array) =>
  array.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

const sortASC = (planets, name, numeric, column) => {
  if (column === 'Name') {
    const filter = numericFilter(planets, name, numeric);
    return sortPlanet(filter);
  }
  return numericFilter(planets, name, numeric).sort(
    (a, b) => a[column] - b[column]
  );
};

export default sortASC;
