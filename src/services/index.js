const compare = (a, b, op) => {
  let result;
  if (op === 'maior que') result = a > b;
  if (op === 'menor que') result = a < b;
  if (op === 'igual a') result = a === b;
  return result;
};

export default compare;
