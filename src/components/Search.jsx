import React from 'react';
import './Search.css';
// deve ter conexão com a store
const Search = () => {
  return (
    <div>
      <label className="labels">
        Digite o nome:
      </label>
      <input className="serachBar" data-testid="name-filter" value="Search" readOnly />
    </div>
  );
};

export default Search;