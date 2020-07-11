// const filterPlanets = () => {
//   const objKeys = data.length !== 0 ? Object.keys(data[0]).filter((keys) => keys !== 'residents') : [];
//   let planets = data;
//   if (searchText !== '') {
//     planets = planets.filter(
//       (planet) =>
//         planet.name.includes(searchText.toUpperCase()) ||
//         planet.name.includes(searchText.toLowerCase()),
//     );
//   }
// };

// export default filterPlanets;

const compare = (planeta, column, comparison, value) => {
  switch (comparison) {
    case 'menor que':
      return planeta[column] < Number(value);
    case 'maior que':
      return planeta[column] > Number(value);
    default:
      return true;
  }
};

export default compare;
