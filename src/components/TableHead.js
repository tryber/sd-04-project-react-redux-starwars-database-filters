import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ objKeys }) => (
  <thead className="thead-dark">
    <tr>
      {objKeys.map((objKey) => (
        <th key={`${objKey} index`}>{objKey}</th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  objKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
