import React from 'react';

const Filter = (data, searchText, title) => {
  let info = data;
  if (searchText !== '') info = data.filter((planet) => planet.name.includes(searchText));
  return info.map((planet) => (
    <tr key={planet.name}>
      {title.map((element) => <td key={element}>{planet[element]}</td>)}
    </tr>
  ));
};

export default Filter;
