const reduceFilter = (categories, currentComparisons) => {
  const currentColunms = [];
  currentComparisons.forEach((obj) => currentColunms.push(obj.column));
  return categories.reduce((unique, item) => {
    if (currentColunms.includes(item)) return unique;
    return [...unique, item];
  }, []);
};

export default reduceFilter;
