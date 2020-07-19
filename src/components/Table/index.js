import React from 'react';

const handleHeaders = (data) => {
  // const headers = Object.keys(data[0]).filter((header) => header !== 'residents');
// console.log(data)
  // return headers;
};

const Table = ({ planets }) => {
  const tableHeaders = handleHeaders(planets);
  console.log(tableHeaders)
  return (
    <div>
      <table>
        <thead></thead>
      </table>
    </div>
  );
};

export default Table;
