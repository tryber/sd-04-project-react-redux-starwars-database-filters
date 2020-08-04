function sortFunc(data, column, sort) {
  // return console.log('cascascsacd', data, column, sort);
  const columnLowerCase = column.toLowerCase();
  if (columnLowerCase === 'name') {
    if (sort === 'ASC') {
      return data.sort((a, b) => a[columnLowerCase].localeCompare(b[columnLowerCase]));
    }
    return data.sort((a, b) => b[columnLowerCase].localeCompare(a[columnLowerCase]));
  }
  if (sort === 'ASC') {
    return data.sort((a, b) => a[columnLowerCase] - b[columnLowerCase]);
  }
  if (sort === 'DESC') {
    return data.sort((a, b) => b[columnLowerCase] - a[columnLowerCase]);
  }
  return false;
}

export default sortFunc;
