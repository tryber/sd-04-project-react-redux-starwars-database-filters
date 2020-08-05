import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';


function Table() {
  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
