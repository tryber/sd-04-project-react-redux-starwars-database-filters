import React from 'react';

const CreateHeadings = ({ dados }) => (
  <thead>
    <tr>{dados.map((key) => key !== 'url' && <th key={key}>{key}</th>)}</tr>
  </thead>
);

export default CreateHeadings;
