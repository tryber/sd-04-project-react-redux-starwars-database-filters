import React from 'react';
import './Search.css';
// deve ter conexão com a store
export default () => {
  return (
    <div>
      <label className="labels" htmlFor="">
        Digite o nome:
      </label>
      <input className="serachBar" data-testid="name-filter" value="Search" readOnly />
    </div>
  );
};
