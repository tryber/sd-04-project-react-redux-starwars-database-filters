import React from 'react';

const FilterFunction = (data, searchText, title, comparisonFilter) => {
  let info = data;
  if (searchText !== '') info = data.filter((planet) => planet.name.toLowerCase().includes(searchText));
  if (comparisonFilter.length > 0) {
    comparisonFilter.forEach(({ column, comparison, value }) => {
      info = info.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        return null;
      });
    },
  );
  }
  return info.map((planet) => (
    <tr key={planet.name}>
      {title.map((element) => <td key={element}>{planet[element]}</td>)}
    </tr>
  ));
};

export default FilterFunction;
