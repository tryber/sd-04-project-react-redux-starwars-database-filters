const filterFunction = (data, filterParams) => {
  if (filterParams) return data.filter((child) => child.name.toLowerCase().includes(filterParams));
  return data;
};

export default filterFunction;
