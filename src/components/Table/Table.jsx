import React from 'react';
import THead from './THead';
import TBody from './TBody';

function Table() {
  return (
    <div>
      <h1> StarWars Database Filters</h1>
      <table>
        <THead />
        <TBody />
      </table>
    </div>
  );
}

export default Table;
