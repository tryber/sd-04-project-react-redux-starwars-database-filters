const compare = (planeta, column, comparison, value) => {
  switch (comparison) {
    case 'menor que':
      return planeta[column] < Number(value);
    case 'maior que':
      return planeta[column] > Number(value);
    case 'igual a':
      return Number(planeta[column]) === Number(value);
    default:
      return false;
  }
};

const sortData = (data, { column, sort }) => {
  if (sort === 'DESC') {
    return data.sort((a, b) => Number(b[column]) - Number(a[column]));
  }
  if (sort === 'ASC') {
    return data.sort((a, b) => Number(a[column]) - Number(b[column]));
  }
  return false;
};

export { compare, sortData };
