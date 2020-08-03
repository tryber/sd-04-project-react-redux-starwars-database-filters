import React from 'react';
import TableBody from './TableBody';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          {TableBody.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <TableBody />
    </table>
  );
}

export default Table;
