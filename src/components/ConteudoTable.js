import React from 'react';

const ConteudoTable = (data, title, input, comparisonMaster) => {
  let novo = data;
  if (input !== '') novo = data.filter((planet) => planet.name.toLowerCase().includes(input));
  if (comparisonMaster.length > 0) {
    comparisonMaster.forEach(({ column, comparison, value }) => {
      novo = novo.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        return null;
      });
    },
  );
  }
  return novo.map((conteudo) => (
    <tr>
      {title.map((element) => (
        <td key={element.name}>{conteudo[element]}</td>
      ))}
    </tr>
  ));
};

export default ConteudoTable;
