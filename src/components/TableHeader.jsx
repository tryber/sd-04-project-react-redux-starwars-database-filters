import React from 'react';
import planetHeaders from '../services/data';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        {planetHeaders.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
