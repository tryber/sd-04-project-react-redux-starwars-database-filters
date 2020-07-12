const reduceFilter = (categories, currentComparisons, actualFilter) => {
  const currentColumns = [];
  if (actualFilter) {
    currentColumns.push(actualFilter);
    console.log('cai no if', currentColumns);
  } else {
    currentComparisons.forEach((obj) => currentColumns.push(obj.column));
    console.log('cai no else', currentColumns);
  }
  return categories.reduce((unique, item) => {
    if (currentColumns.includes(item)) return unique;
    return [...unique, item];
  }, []);
};

export default reduceFilter;
