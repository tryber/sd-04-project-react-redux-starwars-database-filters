import FilterFunction from './FilterFunction';

const orderName = (arrayColumn) => arrayColumn.sort(function (a, b) {
  if (a.name < b.name) return 1;
  if (a.name > b.name) return -1;
  return 0;
});

const orderFuncDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = FilterFunction(planets, name, numericValues);
    return orderName(filter);
  }
  return FilterFunction(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default orderFuncDesc;
