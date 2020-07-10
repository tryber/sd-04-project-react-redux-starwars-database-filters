import React from 'react';
import planetHeaders from '../../services/data';

const TableHeader = () => (
  <thead>
    <tr>
      {planetHeaders.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
