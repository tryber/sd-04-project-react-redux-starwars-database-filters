function sortFunc(data, column, sort) {
  const columnLowerCase = column.toLowerCase();

  if (columnLowerCase === 'name') {
    return sort === 'ASC'
      ? data.sort((a, b) => a[columnLowerCase].localeCompare(b[columnLowerCase]))
      : data.sort((a, b) => b[columnLowerCase].localeCompare(a[columnLowerCase]));
  }
  return sort === 'ASC'
    ? data.sort((a, b) => a[columnLowerCase] - b[columnLowerCase])
    : data.sort((a, b) => b[columnLowerCase] - a[columnLowerCase]);
}

export default sortFunc;
