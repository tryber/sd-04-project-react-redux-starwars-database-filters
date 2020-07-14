const reduceFilter = (categories, currentComparisons, actualFilter) => {
  const currentColumns = [];
  if (actualFilter) currentColumns.push(actualFilter);
  else currentComparisons.forEach((obj) => currentColumns.push(obj.column));
  return categories.reduce((unique, item) => {
    if (currentColumns.includes(item)) return unique;
    return [...unique, item];
  }, []);
};

export default reduceFilter;
