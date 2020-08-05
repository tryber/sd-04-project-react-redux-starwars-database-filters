import selectFilter from './selectFilter';

const orderName = (array) => (
  array.sort(function (a, b) {
    if (a.name < b.name) { return 1; }
    if (a.name > b.name) { return -1; }
    return 0;
  })
);

const decrease = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = selectFilter(planets, name, numericValues);
    return orderName(filter);
  }
  return selectFilter(planets, name, numericValues).sort((a, b) => b[columnSort] - a[columnSort]);
};

export default decrease;
