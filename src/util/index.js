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

export default compare;
