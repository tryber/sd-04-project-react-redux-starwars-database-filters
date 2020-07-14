import React from 'react';
import TableBody from './TableBody';

const TableHead = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="Tabela">
            <th>name</th> <th>climate</th> <th>created</th> <th>diameter</th>
            <th>edited</th>
            <th>gravity</th> <th>orbital_period</th> <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th> <th>terrain</th> <th>url</th> <th>films</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};

export default TableHead;
