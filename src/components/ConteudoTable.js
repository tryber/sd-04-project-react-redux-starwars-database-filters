import React from 'react';

const ConteudoTable = (data, title, input) => {
  let novo = data;
  if (input !== '') novo = data.filter((planet) => planet.name.toLowerCase().includes(input));
  return novo.map((conteudo) => (
    <tr>
      {title.map((element) => (
        <td key={element.name}>{conteudo[element]}</td>
      ))}
    </tr>
  ));
};

export default ConteudoTable;
